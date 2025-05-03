export const abi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "bytes16",
				name: "encryptedKeyIV",
				type: "bytes16",
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "encryptedKey",
				type: "bytes",
			},
		],
		name: "EncryptedKeys",
		type: "event",
	},
	{
		inputs: [
			{
				internalType: "bytes16",
				name: "keyIV",
				type: "bytes16",
			},
			{
				internalType: "bytes",
				name: "key",
				type: "bytes",
			},
		],
		name: "submitEncryptedKeys",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];

export const contractAddress = "0x608102f1d09Ad4a5Ca6a31182D8b82c1e38232a2";

// module.exports = { abi, contractAddress};