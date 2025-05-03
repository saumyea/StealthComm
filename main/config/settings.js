// require("dotenv").config({ path: './electron/config/.env' })
// import dotenv from "dotenv";
// dotenv.config({ path: "./.env" });
import "./env.js";

// import dotenv from "dotenv";
// dotenv.config({ path: ["./.env"] });

const settings = {
    "tor":{
        "SocksPort": 9050,
        "DataDirectory": "./main/utils/tor/data",
        "GeoIPFile": "./main/utils/tor/geoip",
        "GeoIPv6File": "./main/utils/tor/geoipv6",
        "BridgeRelay":  0,
    },
    "ring-sign": {
        "NumFetchPubKeys":  5,
        "NumUsePubKeys":  3,
        "PubKeysCache":  604800000,
        "PubKeysPurgeRand": 1
    }
}

export function setupSettings(){
    // require("dotenv").config({ path: "./electron/config/.env" });
    global.settings = settings;
}

// module.exports = { setupSettings }