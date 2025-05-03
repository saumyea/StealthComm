import { encryptMsg } from "../modules/encryption/aes.js";
import { sign, verify } from "../modules/ring-signature/index.js";
import {
	uint8ArrayToHex,
	uint8ArrayArrayToHex,
	hexToUint8Array,
	hexToUint8ArrayArray,
} from "../modules/ring-signature/conversion.js";
import { uploadMsg } from "../modules/ipfs.js";

export default async function sendMessage(
	message,
	symmetricKey,
	privateKey,
	viewPubKey,
	spendPubKey
) {
	console.log("SendMessage called");
	const encryptedMsg = encryptMsg(message, symmetricKey);
	// console.log("Message: ", message);
	// console.log("Encrypted Message: ", encryptedMsg);

	const { signature, ring } = await sign(encryptedMsg, privateKey);
	// console.log("Ring Signature: ", uint8ArrayToHex(signature));
	// console.log("Ring: ", uint8ArrayArrayToHex(ring));

	const ringValidation = verify(
		hexToUint8Array(uint8ArrayToHex(signature)),
		encryptedMsg,
		hexToUint8ArrayArray(uint8ArrayArrayToHex(ring), 32)
	);
	if (ringValidation) console.log("Ring Signature Verified");
	else console.log("Ring Signature Failed");
	// const finalMessage = encryptedMsg + "//" + uint8ArrayToHex(signature) + "//" + uint8ArrayArrayToHex(ring);

	const finalMessage = {
		message: encryptedMsg,
		signature: uint8ArrayToHex(signature),
		ring: uint8ArrayArrayToHex(ring),
	};
	console.log("Final Message: ", JSON.stringify(finalMessage));

	const { IpfsHash, Timestamp } = await uploadMsg(
		finalMessage,
		viewPubKey,
		spendPubKey
	);

	console.log(IpfsHash);
	return { encryptedMsg, signature, ring, IpfsHash, Timestamp };
}

// module.exports = { sendMessage };
