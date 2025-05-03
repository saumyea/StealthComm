import { generateKeyPairs } from "../modules/stealth-address.js";
import { Wallet } from "ethers";

export default function initUser() {		//runs once when registeration of user is done
	const wallet = Wallet.createRandom();

	const address = wallet.address,
		ethPrivKey = wallet.privateKey,
		ethPubKey = wallet.publicKey;

	const { viewKey, spendKey } = generateKeyPairs();

	const viewPrivKey = viewKey.getPrivate().toString("hex"),
		viewPubKey = viewKey.getPublic().encodeCompressed("hex");
	const spendPrivKey = spendKey.getPrivate().toString("hex"),
		spendPubKey = spendKey.getPublic().encodeCompressed("hex");

	//const [ethPrivKey, ethPubKey, myViewPrivKey, myViewPubKey, mySpendPrivKey, mySpendPubKey]
	return [
		ethPrivKey,
		ethPubKey,
		address,
		viewPrivKey,
		viewPubKey,
		spendPrivKey,
		spendPubKey,
	];
}

// module.exports = { initUser };
