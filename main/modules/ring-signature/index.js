import { ed25519 as ed } from "@noble/curves/ed25519";
import * as SAG from "ring-signatures/SAG";
import crypto from "crypto";
import { downloadPubKey, getPubKeyList } from "../ipfs.js";
import { base64ToUint8Array } from "./conversion.js";

function getKeyFromString(key) {
	// Hash the input string using SHA-256 to get exactly 32 bytes
	const hash = crypto.createHash("sha256").update(key).digest();

	// Return the result as a Uint8Array
	return new Uint8Array(hash);
}

async function getRing(ringLength) {
	const pubKeyList = await getPubKeyList();
	const selectedPubKeyIds = [];
	const ring = new Array(ringLength);
	console.log("getRing called");

	while (selectedPubKeyIds.length < ringLength) {
		const randomIndex = Math.floor(Math.random() * pubKeyList.length);
		if (!selectedPubKeyIds.includes(pubKeyList[randomIndex])) {
			selectedPubKeyIds.push(pubKeyList[randomIndex]);
		}
	}

	for (let i = 0; i < ringLength; i++) {
		const pubkeyBase = await downloadPubKey(selectedPubKeyIds[i]);
		console.log("Base64 Ring:");
		console.log(pubkeyBase);
		const pubkeyArr = base64ToUint8Array(pubkeyBase);
		console.log(pubkeyArr);
		ring[i] = new Uint8Array(32);
		ring[i] = pubkeyArr;
	}

	return ring;
}

export async function sign(message, privateKey) {
	// Create Ring
	const secretIndex = 2;
	const ringLength = 10;

	const privKey = getKeyFromString(privateKey);
	const publicKey = ed.getPublicKey(privKey);

	const ring = await getRing(ringLength);

	// Set Public Key
	ring[secretIndex] = publicKey;

	// SAG Signature
	const signature = SAG.sign(message, privKey, ring, secretIndex);

	return { signature, ring };
}

export function verify(signature, message, ring) {
	const sigValid = SAG.verify(signature, message, ring);

	return sigValid;
}

// module.exports = { sign, verify };
