import { app, BrowserWindow } from "electron";
import {
	dbCheck,
	createMe,
	loginUser,
	getChatList,
	getChatsByID,
	returnMnemonic,
	syncUser,
	send,
  	startReceive,
  	getMyDetails,
	getUserDetails,
	forgotPassword,
	getIP
} from "./ipcHandlers/index.js";
import { getMe } from "./modules/db.js";
import { setUpContract } from "./modules/blockchain/index.js";
import { startTor, killTor } from "./modules/tor.js";
import { setupSettings } from "./config/settings.js";
import { ipcMain } from "electron";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			sandbox: false,
			preload: path.join(__dirname, "../preload/index.mjs"),
		},
		icon: path.join(__dirname,"../assets/stealthcomm-icon.png"),
	});

  function triggerBackendCallback() {
		if (win) {
      console.log("Callback Initiated from Backend");
			win.webContents.send("backend-callback"); // Send the event to the renderer
		}
  }

  ipcMain.handle("check-user", () => {
		return dbCheck();
  });

  ipcMain.handle("set-password", (event, username, password) => {
		return createMe(username, password);
  });

  ipcMain.handle("login", async (event, password) => {
	try {
		const loginSuccess = await loginUser(password);
		console.log("MY DETAILS: ");
		console.log(await getMe());
	
		await setUpContract();
		
		if (loginSuccess) {
		  console.log("Login successful. Starting backend callback interval.");
	
		  startReceive(triggerBackendCallback);
		}
		return loginSuccess;
	} catch (error) {
		return false
	}
  });

  ipcMain.handle("get-chats", () => {
		return getChatList();
  });

  ipcMain.handle("get-messages", (event, chatID) => {
		return getChatsByID(chatID);
  });

  ipcMain.handle("get-mnemonic", (event, commonSecret) => {
		return returnMnemonic(commonSecret);
  });
  
  ipcMain.handle("sync-user", (event, sequence, receiverName, goFirst) => {
		return syncUser(sequence, receiverName, goFirst);
  });

  ipcMain.handle("send-msg", (event, selectedChatID, trimmed) => {
		return send(selectedChatID, trimmed);
  });

  ipcMain.handle("get-my-details", () => {
		return getMyDetails();
  });

  ipcMain.handle("get-user-details", (event, userID) => {
		return getUserDetails(userID);
  });

  ipcMain.handle("forgot-password", () => {
		return forgotPassword();
  });

  ipcMain.handle("get-ip", () => {
		return getIP();
  });

  win.maximize();

	// http://localhost:5173/
	// win.loadURL("http://localhost:5173/");
	win.loadFile(path.join(__dirname, "../index.html"));
};

const init = async () => {
	setupSettings();
	await startTor();

	app.whenReady().then(() => {
		createWindow();
	});
};

init();

