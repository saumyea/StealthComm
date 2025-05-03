import { hexToUint8Array } from "./ring-signature/conversion.js";
import sqlite3 from "@journeyapps/sqlcipher";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let db;

export function existsDB() {
	const dbPath = path.resolve(__dirname, "../../data.db");
	return fs.existsSync(dbPath);
}

export function deleteDB(){
	try {
		db.close();
		const dbPath = path.resolve(__dirname, "../../data.db");
		if (fs.existsSync(dbPath)) {
			fs.unlinkSync(dbPath);
			console.log("Database deleted successfully.");
			return true;
		} else {
			console.log("Database does not exist.");
			return false;
		}
	} catch (err) {
		console.error("Error deleting the database:", err.message);
		return false;
	}
}

export function setDB(password) {
	return new Promise((resolve, reject) => {
		db = new sqlite3.Database("./data.db");
		db.serialize(() => {
			db.run(`PRAGMA key = '${password}';`);
			db.serialize(() => {
				db.run(
					`
                    CREATE TABLE IF NOT EXISTS Users (
                        ID INTEGER PRIMARY KEY,
                        Name TEXT NOT NULL,
                        SymmetricKey TEXT NOT NULL,
                        ViewPublicKey TEXT NOT NULL,
                        SpendPublicKey TEXT NOT NULL
                    );
                `,
					(pragmaErr) => {
						if (pragmaErr) {
							console.error(
								"Failed to set encryption key 1:",
								pragmaErr.message
							);
							reject("Login Failed");
						}
					}
				);
				db.run(
					`
                    CREATE TABLE IF NOT EXISTS User (
                        ID INTEGER PRIMARY KEY,
                        UserName TEXT NOT NULL,
                        Password TEXT NOT NULL,
                        PrivateKey TEXT NOT NULL,
                        PublicKey TEXT NOT NULL,
						Address TEXT NOT NULL,
                        ViewPrivateKey TEXT NOT NULL,
                        ViewPublicKey TEXT NOT NULL,
                        SpendPrivateKey TEXT NOT NULL,
                        SpendPublicKey TEXT NOT NULL
                    );
                `,
					(pragmaErr) => {
						if (pragmaErr) {
							console.error(
								"Failed to set encryption key 2:",
								pragmaErr.message
							);
							reject("Login Failed");
						}
					}
				);
				db.run(
					`
                    CREATE TABLE IF NOT EXISTS SeenMessages (
                        CID TEXT PRIMARY KEY
                    );
                `,
					(pragmaErr) => {
						if (pragmaErr) {
							console.error(
								"Failed to set encryption key 3:",
								pragmaErr.message
							);
							reject("Login Failed");
						}
					}
				);
				db.run(
					`
                    CREATE TABLE IF NOT EXISTS Messages (
                        Cid TEXT PRIMARY KEY,
                        UserID INTEGER NOT NULL,
                        Message TEXT NOT NULL,
						EncryptedMessage TEXT NOT NULL,
                        TimeStamp TEXT NOT NULL,
                        Sent INTEGER NOT NULL,
                        Ring TEXT,
                        Signature TEXT,
                        FOREIGN KEY (UserID) REFERENCES Users(ID)
                    );
                `,
					(pragmaErr) => {
						if (pragmaErr) {
							console.error(
								"Failed to set encryption key 4:",
								pragmaErr.message
							);
							reject("Login Failed");
						} else {
							console.log("Database initialized successfully.");
							resolve(true);
						}
					}
				);
			});
		});
	});
}

export function addMe(user) {
	return new Promise((resolve, reject) => {
		db.run(
			`INSERT INTO User (UserName, Password, PrivateKey, PublicKey, Address, ViewPrivateKey, ViewPublicKey, SpendPrivateKey, SpendPublicKey) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
			user,
			(err) => {
				if (err) {
					console.error(
						"Error adding user to User table:",
						err.message
					);
					reject(err);
				} else {
					console.log("User added successfully to User table.");
					resolve(true);
				}
			}
		);
	});
}

export function addUser(user) {
	return new Promise((resolve, reject) => {
		db.run(
			`INSERT INTO Users (Name, SymmetricKey, ViewPublicKey, SpendPublicKey) VALUES (?, ?, ?, ?)`,
			user,
			(err) => {
				if (err) {
					console.error("Error adding user:", err.message);
					reject(err);
				} else {
					console.log("User added successfully.");
					resolve(true);
				}
			}
		);
	});
}

export function getUsers() {
	return new Promise((resolve, reject) => {
		db.all(`SELECT * FROM Users`, [], (err, rows) => {
			if (err) {
				console.error("Error retrieving user:", err.message);
				reject(err);
			} else if (!rows) {
				console.log("No user found with the given ID.");
				resolve(null);
			} else {
				console.log("User retrieved successfully:");
				// rows.SymmetricKey = rows.SymmetricKey.toString("hex");
				resolve(rows);
			}
		});
	});
}

export function getChats() {
	return new Promise((resolve, reject) => {
		db.all(
			`
			SELECT 
				Users.*,
				MAX(Messages.TimeStamp) AS LastMessageTime,
				(
					SELECT Message 
					FROM Messages 
					WHERE Messages.UserID = Users.ID 
					ORDER BY TimeStamp DESC 
					LIMIT 1
				) AS LastMessage
			FROM 
				Users
			LEFT JOIN 
				Messages
			ON 
				Users.ID = Messages.UserID
			GROUP BY 
				Users.ID
			ORDER BY 
				LastMessageTime DESC;
			`,
			[],
			(err, rows) => {
				if (err) {
					console.error("Error retrieving user:", err.message);
					reject(err);
				} else if (rows.length == 0) {
					console.log("No users found");
					resolve(rows);
				} else {
					console.log("User retrieved successfully:");
					console.log(rows);
					// rows.SymmetricKey = rows.SymmetricKey.toString("hex");
					resolve(rows);
				}
			}
		);
	});
}

export function getUser(userID) {
	return new Promise((resolve, reject) => {
		db.get(`SELECT * FROM Users WHERE ID = ?`, [userID], (err, row) => {
			if (err) {
				console.error("Error retrieving user:", err.message);
				reject(err);
			} else if (!row) {
				console.log("No user found with the given ID.");
				resolve(null);
			} else {
				console.log("User retrieved successfully:");
				// row.SymmetricKey = row.SymmetricKey.toString("hex");
				resolve(row);
			}
		});
	});
}

export function getMe() {
	return new Promise((resolve, reject) => {
		db.get(`SELECT * FROM User WHERE ID = 1`, [], (err, row) => {
			if (err) {
				console.error("Error retrieving user:", err.message);
				reject(err);
			} else if (!row) {
				console.log("No user found with the given ID.");
				resolve(null);
			} else {
				console.log("User retrieved successfully:");
				resolve(row);
			}
		});
	});
}

export function addMessage(message) {
	return new Promise((resolve, reject) => {
		db.run(
			`INSERT INTO Messages (Cid, UserID, Message, EncryptedMessage, TimeStamp, Sent, Ring, Signature) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
			message,
			(err) => {
				if (err) {
					console.error("Error adding Message:", err.message);
					reject(err);
				} else {
					console.log("Message added successfully.");
					resolve(true);
				}
			}
		);
	});
}

export function getMessages(userID) {
	return new Promise((resolve, reject) => {
		db.all(
			`SELECT * FROM Messages 
            WHERE UserID = ?
            ORDER BY TimeStamp ASC
			`,
			[userID],
			(err, rows) => {
				if (err) {
					console.error("Error retrieving Message:", err.message);
					reject(err);
				} else if (!rows) {
					console.log("No Message found with the given ID.");
					resolve(null);
				} else {
					console.log("Message retrieved successfully:");
					console.log(rows);
					const filteredRows = rows.map((row) => {
						row.Signature = hexToUint8Array(
							row.Signature.toString("hex")
						);
						return row;
					});
					resolve(filteredRows);
				}
			}
		);
	});
}

export function getSeenMessages() {
	return new Promise((resolve, reject) => {
		db.all(`SELECT * FROM SeenMessages`, [], (err, rows) => {
			if (err) {
				console.error("Error retrieving Message:", err.message);
				reject(err);
			} else if (!rows) {
				console.log("No Message found with the given ID.");
				resolve(null);
			} else {
				console.log("Message retrieved successfully:");
				rows = rows.map((row) => {
					return row.CID;
				});
				resolve(rows);
			}
		});
	});
}

export function addSeenMessages(cid) {
	return new Promise((resolve, reject) => {
		db.run(`INSERT INTO SeenMessages (Cid) VALUES (?)`, [cid], (err) => {
			if (err) {
				console.error("Error adding Message:", err.message);
				reject(err);
			} else {
				console.log("Message added successfully.");
				resolve(true);
			}
		});
	});
}

export function getSymmetricKeys() {
	return new Promise((resolve, reject) => {
		db.all(`SELECT ID, SymmetricKey FROM Users`, [], (err, rows) => {
			if (err) {
				console.error("Error retrieving Message:", err.message);
				reject(err);
			} else if (!rows) {
				console.log("No Message found with the given ID.");
				resolve(null);
			} else {
				console.log("Message retrieved successfully:");
				rows = rows.map((row) => ({
					ID: row.ID,
					SymmetricKey: row.SymmetricKey,
				}));
				resolve(rows);
			}
		});
	});
}
