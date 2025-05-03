import { decryptMsg } from "../modules/encryption/aes.js";
import { verify } from "../modules/ring-signature/index.js";
import {
	hexToUint8Array,
	hexToUint8ArrayArray,
} from "../modules/ring-signature/conversion.js";
import { getSymmetricKeys, addMessage } from "../modules/db.js";
import { findMsg, downloadMsg } from "../modules/ipfs.js";

export default async function displayNewMessages(
	viewPrivKey,
	spendPubKey,
	triggerBackendCallback
) {
	// const viewPrivKey = process.env.viewPrivKey, spendPubKey = process.env.spendPubKey;
	console.log("Checking Msgs");
	const msgs = await findMsg(viewPrivKey, spendPubKey);	//returns cids
	console.log("MESSAGES ARE: ");
	console.log(msgs);
	if (Array.isArray(msgs) && msgs.length > 0) {
		for (const { ipfs_pin_hash: cid, date_pinned: timeStamp } of msgs) {
			const { message, signature, ring } = await downloadMsg(cid);
			const symmetricKeys = await getSymmetricKeys();		//brute forcing with all symmetric keys 
			console.log("Encrypted Message: ", message);
			console.log("Signature: ", signature);
			console.log("Ring: ", ring);

			const ringValidation = verify(
				hexToUint8Array(signature),
				message,
				hexToUint8ArrayArray(ring, 32)
			);

			if (ringValidation) console.log("Ring Signature Verified");
			else console.log("Ring Signature Failed");

			try {
				const messages = symmetricKeys.map(({ ID, SymmetricKey }) => {
					const decryptedMessage = decryptMsg(message, SymmetricKey);
					if (!decryptedMessage.includes("BAD_DECRYPT")) {
						return { decryptedMessage, ID };
					}
				});

				console.log("Decrypted Message: ", messages);
				// (Cid, UserID, Message, TimeStamp, Sent, Ring, Signature)
				messages.forEach((msg) => {
					if(msg){
						console.log([
							cid,
							msg.ID,
							msg.decryptedMessage,
							message,
							timeStamp,
							false,
							ring,
							signature,
						]);
						addMessage([
							cid,
							msg.ID,
							msg.decryptedMessage,
							message,
							timeStamp,
							false,
							ring,
							signature,
						]);	
					}
				});
			} catch (error) {
				console.log("Error During Decryption: ", error.message);
			}
		}
		triggerBackendCallback();
	}
}

// const {viewKey, spendKey} = generateKeyPairs()
// let viewPrivKey = viewKey.getPrivate().toString('hex');
// let viewPubKey = viewKey.getPublic().encodeCompressed('hex');
// let spendPubKey = spendKey.getPublic().encodeCompressed('hex');

// viewPrivKey = '9641cc6fade3d982cb025572c60e15e854a59216a1c5da2258cebd2f96559904';
// viewPubKey = '02f6aae752cf075b2c64847e87824c96b12ec5ee193a55059ecaa73ff4c91c677e';
// spendPubKey = '02d590ae1d9c96bdccf95a040cf08329d2d211822dc0a3766a8a697b901accdced';

// console.log("viewPrivKey: ", viewPrivKey);
// console.log("viewPubKey: ", viewPubKey);
// console.log("spendPubKey: ", spendPubKey);

// setInterval(() => {displayNewMessages(viewPrivKey, spendPubKey)}, 30000);

// console.log('Watching file for changes... Press CTRL+C to exit.');

// displayNewMessages(viewPrivKey, spendPubKey);

// module.exports = { displayNewMessages };
