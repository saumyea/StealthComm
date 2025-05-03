import axios from "axios";
import {
	generateStealthAddress,
	checkStealthAddress,
} from "./stealth-address.js";
import { getSeenMessages, addSeenMessages } from "./db.js";

export async function uploadMsg(content, viewPubKey, spendPubKey) {
	const { stealthAddress, ephemeralPubKey } = generateStealthAddress(
		viewPubKey,
		spendPubKey
	);

	console.log("Stealth Address is: " + stealthAddress);
	console.log("View Public Key: " + viewPubKey);
	console.log("Spend Public Key: " + spendPubKey);

	const agent = process.torAgent;
	const response = await axios.get("https://api.ipify.org?format=json", {
		httpsAgent: agent,
	});
	console.log("Public IP Address for IPFS:", response.data.ip);

	const headers = {
		Authorization: `Bearer ${process.env.PINATA_JWT}`,
		"Content-Type": "application/json",
	};

	const body = {
		pinataOptions: {
			cidVersion: 1,
			groupId: "eafedde3-aa27-48a8-8e78-b7deced88985",
		},
		pinataMetadata: {
			name: "message.json",
			keyvalues: {
				ephemeralPubKey,
				stealthAddress,
			},
		},
		pinataContent: content,
	};

	const upload = await axios.post(
		"https://api.pinata.cloud/pinning/pinJSONToIPFS",
		body,
		{
			headers,
			httpsAgent: agent,
			httpAgent: agent,
		}
	);

	return upload.data;
}

export async function findMsg(viewPrivKey, spendPubKey) {
	try {
		const seenCIDs = await getSeenMessages();

		const agent = process.torAgent;
		const headers = { Authorization: `Bearer ${process.env.PINATA_JWT}` };

		const response = await axios.get(
			"https://api.pinata.cloud/data/pinList",
			{
				params: {
					groupId: "eafedde3-aa27-48a8-8e78-b7deced88985",
					status: "pinned",
				},
				headers,
				httpsAgent: agent,
				httpAgent: agent,
			}
		);

		const { rows } = response.data;
		const filteredRows = await Promise.all(
			rows.map(async (row) => {
				const pinHash = row.ipfs_pin_hash;
				if (!seenCIDs.includes(pinHash)) {
					await addSeenMessages(pinHash);
					return row;
				}
				return {};
			})
		);
		const keyIds = filteredRows.filter((row) => {
				if (
					row.metadata &&
					row.metadata.keyvalues &&
					row.metadata.keyvalues.ephemeralPubKey
				) {
					const ephemeralPubKey =
						row.metadata.keyvalues.ephemeralPubKey;
					const stealthAddress =
						row.metadata.keyvalues.stealthAddress;

					return checkStealthAddress(
						viewPrivKey,
						spendPubKey,
						ephemeralPubKey,
						stealthAddress
					);
				}
				return false;
			})
			.map((row) => ({
				date_pinned: row.date_pinned,
				ipfs_pin_hash: row.ipfs_pin_hash,
			}));

		return keyIds;
	} catch (err) {
		console.log(err.status);
	}
}

export async function downloadMsg(cid) {
	const agent = process.torAgent;
	const response = await axios.get("https://api.ipify.org?format=json", {
		httpsAgent: agent,
	});
	console.log("Public IP Address for IPFS:", response.data.ip);

	try {
		const downJSON = await axios.get(
			`https://${process.env.GATEWAY_URL}/ipfs/${cid}`,
			{
				httpsAgent: agent,
				httpAgent: agent,
			}
		);

		return downJSON.data;
	} catch (error) {
		console.log(error.status);
	}
}

export async function uploadPubKey(base64String) {
	try {
		const agent = process.torAgent;
		const buffer = Buffer.from(base64String, "base64");
		const blob = new Blob([buffer]);
		const file = new File([blob], "file");
		const data = new FormData();
		data.append("file", file);

		headers = { Authorization: `Bearer ${process.env.PINATA_JWT}` };

		const body = {
			pinataOptions: {
				cidVersion: 1,
				groupId: "3797f841-7949-434a-9030-a88a350ed0a3",
			},
			pinataMetadata: {
				name: "pubKey",
			},
		};

		data.append("pinataOptions", JSON.stringify(body.pinataOptions));
		data.append("pinataMetadata", JSON.stringify(body.pinataMetadata));

		const upload = await axios.post(
			"https://api.pinata.cloud/pinning/pinFileToIPFS",
			data,
			{
				headers,
				httpsAgent: agent,
				httpAgent: agent,
			}
		);

		return upload.data;
	} catch (err) {
		console.log(err.status);
	}
}

export async function downloadPubKey(cid) {
	try {
		const agent = process.torAgent;
		const downJSON = await axios.get(
			`https://${process.env.GATEWAY_URL}/ipfs/${cid}`,
			{
				responseType: "arraybuffer",
				httpsAgent: agent,
				httpAgent: agent,
			}
		);

		const base64String = Buffer.from(downJSON.data).toString("base64");

		return base64String;
	} catch (error) {
		console.log(error.status);
	}
}

export async function getPubKeyList() {
	try {
		const agent = process.torAgent;
		const headers = { Authorization: `Bearer ${process.env.PINATA_JWT}` };

		const response = await axios.get(
			"https://api.pinata.cloud/data/pinList",
			{
				params: {
					groupId: "3797f841-7949-434a-9030-a88a350ed0a3",
					status: "pinned",
				},
				headers,
				httpsAgent: agent,
				httpAgent: agent,
			}
		);

		const { rows } = response.data;
		const keyIds = rows.map((row) => {
			return row.ipfs_pin_hash;
		});

		return keyIds;
	} catch (err) {
		console.log(err.status);
	}
}
