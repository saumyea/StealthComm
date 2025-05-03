import { contextBridge, ipcRenderer } from "electron";

const listeners = new Map();

contextBridge.exposeInMainWorld("electron", {
	checkUser: () => ipcRenderer.invoke("check-user"),
	setPassword: (username, password) =>
		ipcRenderer.invoke("set-password", username, password),
	login: (password) => ipcRenderer.invoke("login", password),
	fetchUsers: () => ipcRenderer.invoke("get-chats"),
	fetchMessages: (selectedChatID) =>
		ipcRenderer.invoke("get-messages", selectedChatID),
	createMnemonic: (commonSecret) =>
		ipcRenderer.invoke("get-mnemonic", commonSecret),
	syncUser: (sequence, receiverName, goFirst) =>
		ipcRenderer.invoke("sync-user", sequence, receiverName, goFirst),
	send_message: (selectedChatID, trimmed) =>
		ipcRenderer.invoke("send-msg", selectedChatID, trimmed),
	backend_callback: (userCallback) => {
		const wrappedCallback = () => userCallback();
		listeners.set(userCallback, wrappedCallback);
		ipcRenderer.on("backend-callback", wrappedCallback);
	},
	remove_backend_callback: (userCallback) => {
		const wrappedCallback = listeners.get(userCallback);
		if (wrappedCallback) {
			ipcRenderer.removeListener("backend-callback", wrappedCallback);
			listeners.delete(userCallback);
		}
	},
	get_my_details: () => ipcRenderer.invoke("get-my-details"),
	get_user_details: (userID) =>
		ipcRenderer.invoke("get-user-details", userID),
	forgot_password: () => ipcRenderer.invoke("forgot-password"),
	get_ip: () => ipcRenderer.invoke("get-ip")
});
