// require("dotenv").config({ path: './config/.env' })
// const { settings } = require('./settings.js');
import { SocksProxyAgent } from "socks-proxy-agent";
import axios from "axios";
import { spawn } from "child_process";

export async function startTor() {
	const Settings = global.settings;

	if (process.torProcess) {
		killTor();
	}
	// const torArgs = ['--SocksPort', '9050', '--DataDirectory', './tor/data', '--GeoIPFile', './tor/geoip', '--GeoIPv6File', './tor/geoip6'];
	let torArgs = [];
	Object.entries(Settings.tor).forEach(([key, value]) => {
		torArgs.push("--" + key);
		torArgs.push(value);
	});

	// Start the tor.exe process
	console.log(process.env.TOR_PATH);
	const torProcess = spawn(process.env.TOR_PATH, torArgs);

	await waitForTorReady(torProcess);

	const agent = new SocksProxyAgent(
		"socks5://127.0.0.1:" + Settings.tor.SocksPort			//ip + port
	);
	try {
		const response = await axios.get("https://api.ipify.org?format=json", {
			httpsAgent: agent,
		});
		console.log("Public IP Address after TOR:", response.data.ip);
	} catch (error) {
		console.error("Error fetching IP address:", error);
	}
	process.torAgent = agent;
	process.torProcess = torProcess;

	if (process.torAgent && process.torProcess) return true;
	return false;
}

function waitForTorReady(torProcess) {
	return new Promise((resolve, reject) => {
		torProcess.stdout.on("data", (data) => {
			const message = data.toString();
			console.log(`stdout: ${message}`);
			if (message.includes("Bootstrapped 100% (done): Done")) {
				resolve();
			}
		});

		torProcess.stderr.on("data", (data) => {
			console.error(`stderr: ${data}`);
		});

		torProcess.on("error", (error) => {
			reject(error);
		});

		torProcess.on("close", (code) => {
			if (code !== 0) {
				reject(new Error(`Tor process exited with code ${code}`));
			}
		});
	});
}

export function killTor() {
	console.log("Attempting to close Tor process...");
	if (process.torProcess) {
		process.torProcess.kill();

		process.torProcess.on("exit", (code, signal) => {
			console.log(
				`Tor process exited with code ${code}, signal ${signal}`
			);
			process.torProcess = null;
		});

		return true;
	}
	return false;
}

// Export the agent promise
// module.exports = { startTor, killTor };
