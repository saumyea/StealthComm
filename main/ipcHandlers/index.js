import  sendMessage  from "./sendMessage.js";
import displayNewMessages from './displayMessage.js';
import {
	setDB,
	existsDB,
	addMe,
	addUser,
	getUser,
	getMe,
	addMessage,
	getMessages,
	getUsers,
	getChats,
	deleteDB,
} from "../modules/db.js";
import  initUser  from "./initUser.js";
import {
	createMnemonic,
	createSymmetricKey,
	syncPublicKeys,
} from "../modules/sync-user.js";
import crypto from "crypto";
import axios from "axios";

function hashPassword(password) {
	return crypto.createHash("sha256").update(password).digest("hex");
}

export async function createMe(username, password) {
	try {
		console.log("Create User Ran");

		const hashedPassword = hashPassword(password);

		await setDB(hashedPassword);

		// const [ethPrivKey, ethPubKey, myViewPrivKey, myViewPubKey, mySpendPrivKey, mySpendPubKey] = initUser();
		const userKeys = initUser();

		const user = [username, hashedPassword, ...userKeys];

		console.log("User Reached");
		console.log(user);
		await addMe(user);
		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
}

export function dbCheck(){
	return existsDB();
}

export async function loginUser(password) {
	try {
		if (!existsDB()) return "DB Doesn't Exist";
		const hashedPassword = hashPassword(password);

		await setDB(hashedPassword);

		return true;
	} catch (err) {
		console.log("Failed to Login");
		console.log(err);
		return false;
	}
}

export function returnMnemonic(commonSecret){
	return createMnemonic(commonSecret);
}

export async function syncUser(orderedMnemonic, username, goFirst) {
	const symmetricKey = createSymmetricKey(orderedMnemonic);

	const me = await getMe();

	const viewPubKey = me.ViewPublicKey,
		spendPubKey = me.SpendPublicKey;

	const publicKeys = await syncPublicKeys(
		symmetricKey,
		goFirst,
		viewPubKey,
		spendPubKey
	);

	if (publicKeys) {
		console.log("Sym Key IS ", symmetricKey);
		const [viewPubKey, spendPubKey] = publicKeys.split(":");
		const user = [username, symmetricKey, viewPubKey, spendPubKey];
		if (await addUser(user)) return true;
		return false;
	}

	return false;
}

export async function send(userID, message) {
	try {
		const user = await getUser(userID);
		const me = await getMe();

		console.log("User to send message to:");
		console.log(user);

		const symmetricKey = user.SymmetricKey,
			viewPubKey = user.ViewPublicKey,
			spendPubKey = user.SpendPublicKey,
			privateKey = me.PrivateKey;

		const { encryptedMsg, signature, ring, IpfsHash, Timestamp } = await sendMessage(
			message,
			symmetricKey,
			privateKey,
			viewPubKey,
			spendPubKey
		);

		console.log("SIGNATURE ", signature);

		// (Cid, UserID, Message, TimeStamp, Sent, Ring, Signature)
		await addMessage([
			IpfsHash,
			userID,
			message,
			encryptedMsg,
			Timestamp,
			true,
			ring,
			signature,
		]);

		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
}

export async function startReceive(triggerBackendCallback) {
	//Keep calling display msg
	const { ViewPrivateKey, SpendPublicKey } =
		await getMe();
	setInterval(() => {
		displayNewMessages(
			ViewPrivateKey,
			SpendPublicKey,
			triggerBackendCallback
		);
	}, 5000);
}

// export function setSettings() {}

export async function getMyDetails(){
	const {
		UserName,
		PrivateKey,
		PublicKey,
		Address,
		ViewPrivateKey,
		ViewPublicKey,
		SpendPrivateKey,
		SpendPublicKey,
	} = await getMe();

	return {
		UserName,
		PrivateKey,
		PublicKey,
		Address,
		ViewPrivateKey,
		ViewPublicKey,
		SpendPrivateKey,
		SpendPublicKey,
	};
}

export async function getUserDetails(userID){
	const { SymmetricKey, ViewPublicKey, SpendPublicKey } = await getUser(userID);
	return { SymmetricKey, ViewPublicKey, SpendPublicKey };
}

export async function getChatList() {
	const chatList = await getChats();
	return chatList;
}

export async function getChatsByID(chatID) {
	const chats = await getMessages(chatID);
	return chats;
}

export function forgotPassword(){
	return deleteDB();
}

export async function getIP(){
	const agent = process.torAgent;
	const response = await axios.get("https://api.ipify.org?format=json", {
			httpsAgent: agent,
		});
	console.log("Public IP Address after TOR:", response.data.ip);
	return response.data.ip;
}
