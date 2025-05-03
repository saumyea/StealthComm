import crypto from "crypto";
import bip39 from "bip39";
import { encryptMsg, decryptMsg } from "./encryption/aes.js";
import { listenForPublicKeyEvents, submitKeys } from "./blockchain/index.js";

export function createMnemonic(sharedText) {
	const hash = crypto.createHash("sha256").update(sharedText).digest("hex");

	// 32 for 12 words 40 for 15 words
	const entropy128 = hash.substring(0, 32);

	console.log("Entropy (128-bit):", entropy128);

	const mnemonic = bip39.entropyToMnemonic(entropy128);

	console.log("Deterministic Mnemonic:", mnemonic);

	const mnemonicArr = mnemonic.split(" ");

	console.log(mnemonicArr);
	console.log(typeof mnemonicArr);
	return mnemonicArr;
}

export function createSymmetricKey(mnemonicArrOrdered) {
	console.log(mnemonicArrOrdered);
	const mnemonic = mnemonicArrOrdered.join(" ");
	console.log(mnemonic);

	const aesKey = crypto.createHash("sha256").update(mnemonic).digest(); // 32 bytes for AES-256

	console.log("AES Key:", aesKey.toString("hex"));

	return aesKey.toString("hex");
}

export async function syncPublicKeys(
	symmetricKey,
	goFirst,
	viewPubKey,
	spendPubKey
) {
	let publicKeys = null;

	if (goFirst) {
		publicKeys = await listenForPublicKeyEvents(
			2,
			symmetricKey,
			viewPubKey + ":" + spendPubKey
		);
		console.log();
		console.log("PUBLIC KEYS ARE:");
		console.log(publicKeys);
	}

	console.log();
	console.log("MY PUBLIC KEYS ARE:");
	console.log(viewPubKey + ":" + spendPubKey);

	const encryptedKeys = encryptMsg(
		viewPubKey + ":" + spendPubKey,
		symmetricKey
	);

	console.log(encryptedKeys);

	const [iv, encrypted] = encryptedKeys.split(":");

	console.log();
	console.log("0x" + iv);
	console.log("0x" + encrypted);
	console.log();

	submitKeys("0x" + iv, "0x" + encrypted);

	if (goFirst) {
		return publicKeys;
	} else {
		publicKeys = await listenForPublicKeyEvents(
			2,
			symmetricKey,
			viewPubKey + ":" + spendPubKey
		);
		console.log();
		console.log("PUBLIC KEYS ARE:");
		console.log(publicKeys);
		return publicKeys;
	}
}

// const arr = createMnemonic(text)
// const secretKey = createSymmetricKey(arr)

// const msg = "Text to be encrypted";
// console.log(msg);
// const encryptedMsg = encryptMsg(msg, secretKey);

// console.log(encryptedMsg);

// const decryptedMessage = decryptMsg(encryptedMsg, secretKey);

// console.log(decryptedMessage);

// syncPublicKeys(secretKey);

// const { viewKey, spendKey} = generateKeyPairs();

// const viewPubKey = viewKey.getPublic().encodeCompressed('hex'), spendPubKey = spendKey.getPublic().encodeCompressed('hex');

// // console.log(viewKey.getPrivate().toString('hex'));
// // console.log(viewKey.getPublic().encodeCompressed('hex'));

// console.log(viewPubKey);
// console.log(spendPubKey);

// console.log("COMBINED");

// const encryptedKeys = encryptMsg((viewPubKey+':'+spendPubKey), secretKey);

// console.log(encryptedKeys);

// const combKey = encryptedKeys.split(':');

// console.log('0x'+ combKey[0]);

// console.log('0x'+ combKey[1].substring(0, 64));
// console.log('0x'+ combKey[1].substring(64, 128));
// console.log('0x'+ combKey[1].substring(128, 192));
// console.log('0x'+ combKey[1].substring(192, 256));

// // try{
// //     console.log(decryptMsg(encryptedKeys, secretKey));
// //     console.log(msg);
// // } catch (err){
// //     console.log(null);
// // }

// // try{
// //     const msg = decryptMsg(encryptedKeys, "randkey");
// //     console.log(msg);
// // } catch (err){
// //     if(err.message.includes('bad decrypt')){
// //         console.log("Bad Decryption")
// //     }
// //     console.log(null);
// // }

// (async() => {
//     console.log(await listenForPublicKeyEvents(2, secretKey));
// })();

// console.log("VIEW KEY ONLY");

// const encryptedViewKey = encryptMsg((viewPubKey), secretKey);

// console.log(encryptedViewKey);

// console.log(decryptMsg(encryptedViewKey, secretKey));

// console.log("SPEND KEY ONLY");

// const encryptedSpendKey = encryptMsg((spendPubKey), secretKey);

// console.log(encryptedSpendKey);

// console.log(decryptMsg(encryptedSpendKey, secretKey));

// module.exports = { createMnemonic, createSymmetricKey, syncPublicKeys };
