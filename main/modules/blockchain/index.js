import { ethers } from "ethers";
import { abi, contractAddress } from "./config.js";
import { decryptMsg } from "../encryption/aes.js";
import { getMe } from "../db.js";

// const provider = new ethers.JsonRpcProvider(process.env.INFURA_PROVIDER_URL);
const provider = new ethers.getDefaultProvider("sepolia", {
	infura: process.env.INFURA_PROJECT_ID
});

let contract;

export async function setUpContract(){
	// Connect to the contract
	const privateKey = (await getMe()).PrivateKey;
	const wallet = new ethers.Wallet(privateKey, provider);

	// ✅ Connect contract with signer
	contract = new ethers.Contract(contractAddress, abi, wallet);

	console.log("Contract connected successfully!");
}

export async function submitKeys(encryptedKeyIV, encryptedKey) {
	try {
		console.log(encryptedKey);
		const tx = await contract.submitEncryptedKeys(
			encryptedKeyIV,
			encryptedKey
		);
		console.log("Transaction submitted:", tx.hash);

		const receipt = await tx.wait();
		console.log("Mined in block:", receipt.blockNumber);
	} catch (err) {
		console.error("Error submitting keys:", err);
	}
}

export function listenForPublicKeyEvents(minutes, symmetricKey, myPubKeys) {
	return new Promise((resolve, reject) => {
		const timeout = setTimeout(() => {
			if (contract.listeners("EncryptedKeys").length > 0) {
				console.log(`Stopped listening Not Found`);
				contract.removeListener("EncryptedKeys");
				reject("No Key Found");
			}
		}, minutes * 60 * 1000);

		contract.on("EncryptedKeys", (encryptedKeyIV, encryptedKey) => {
			console.log(`New event emitted!`);
			console.log(`Encrypted Key 1 IV: ${encryptedKeyIV}`);
			console.log(`Encrypted Key 1: ${encryptedKey}`);
			console.log("---------");

			const iv = encryptedKeyIV.substring(2);
			const encryptedString = encryptedKey.substring(2);
			// const encryptedString = encryptedKey.reduce((sumString, currString) => {
			//     return sumString + currString.substring(2);
			// }, '');
			const encryptedPublicKeys = iv + ":" + encryptedString;
			console.log(encryptedPublicKeys);

			const publicKeys = checkPublicKey(
				encryptedPublicKeys,
				symmetricKey
			);
			if (publicKeys && publicKeys !== myPubKeys) {
				console.log(`Stopped listening Found`);
				contract.removeListener("EncryptedKeys");
				clearTimeout(timeout);
				resolve(publicKeys);
			}
		});
	});
}

function checkPublicKey(encryptedPublicKeys, symmetricKey) {
	try {
		const msg = decryptMsg(encryptedPublicKeys, symmetricKey);
		console.log(msg);
		return msg;
	} catch (err) {
		if (err.message.includes("BAD_DECRYPT")) {
			console.log("Bad Decryption");
		}
		console.log(null);
		return null;
	}
}

// module.exports = { listenForPublicKeyEvents, submitKeys };
