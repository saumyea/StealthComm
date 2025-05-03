import pkg from "elliptic";
const { ec: EC } = pkg;
import crypto from "crypto";

const ec = new EC("secp256k1");

// Hash function to simulate H(rP)
function hashPoint(point) {
	const compressed = point.encodeCompressed(); // Uint8Array
	const hash = crypto.createHash("sha256");
	hash.update(Buffer.from(compressed)); // Convert to Buffer
	return ec.keyFromPrivate(hash.digest()).getPrivate(); // Return BN
}

export function generateStealthAddress(viewPubKeyHex, spendPubKeyHex) {		//receivers
	const viewPubKey = ec.keyFromPublic(viewPubKeyHex, "hex").getPublic();
	const spendPubKey = ec.keyFromPublic(spendPubKeyHex, "hex").getPublic();

	const r = ec.genKeyPair(); // Ephemeral key -- temp priv key
	const R = r.getPublic(); // Ephemeral public key

	const sharedSecret = viewPubKey.mul(r.getPrivate()); // r * P
	const hashedSecret = hashPoint(sharedSecret); // H(rP)
	const stealthPubKey = spendPubKey.add(ec.g.mul(hashedSecret)); // Q + H(rP)·G

	return {
		stealthAddress: stealthPubKey.encodeCompressed("hex"),
		ephemeralPubKey: R.encodeCompressed("hex"), // R to send with message
	};
}

export function checkStealthAddress(
	viewPrivKeyHex,
	spendPubKeyHex,
	ephemeralPubKeyHex,
	targetStealthAddressHex
) {
	const scanPriv = ec.keyFromPrivate(viewPrivKeyHex, "hex").getPrivate();
	const spendPubKey = ec.keyFromPublic(spendPubKeyHex, "hex").getPublic();
	const R = ec.keyFromPublic(ephemeralPubKeyHex, "hex").getPublic();

	const sharedSecret = R.mul(scanPriv); // a * R
	const hashedSecret = hashPoint(sharedSecret); // H(aR)
	const derivedStealthPubKey = spendPubKey.add(ec.g.mul(hashedSecret)); // Q + H(aR)·G

	const derivedAddressHex = derivedStealthPubKey.encodeCompressed("hex");
	return derivedAddressHex === targetStealthAddressHex;
}

export function generateKeyPairs() {
	const viewKey = ec.genKeyPair();
	const spendKey = ec.genKeyPair();

	return {
		viewKey,
		spendKey,
	};
}

// console.log(viewKey.getPrivate().toString('hex'));
// console.log(viewKey.getPublic().encodeCompressed('hex'));

// module.exports = { generateStealthAddress, checkStealthAddress, generateKeyPairs };
