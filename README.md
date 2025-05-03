# StealthComm: Blockchain-Based Secure Communication System

StealthComm is a decentralized, privacy-first messaging platform designed to eliminate reliance on centralized infrastructure. It ensures **end-to-end encryption**, **anonymized routing**, and **tamper-proof message storage** using modern cryptographic protocols, the **Tor network**, **IPFS**, and the **Ethereum blockchain**.

---

## 🔐 Key Features

- **End-to-End Encryption**: Messages are encrypted locally using AES-256-CBC with secure random IVs.
- **Anonymous Routing**: All traffic is routed through the Tor network to hide user IP addresses and resist traffic analysis.
- **Sender & Receiver Anonymity**: 
  - **Stealth Addresses** conceal recipient identity.
  - **Ring Signatures** anonymize the sender among a group of decoys.
- **Decentralized Storage**: Messages and metadata are stored on IPFS and locally in SQLite Cipher Database.
- **Modular Architecture**: Dedicated Crypto, Sender, and Receiver Modules isolate responsibilities and enhance security.

---

## 💡 Use Cases

- Anonymous journalism and whistleblowing.
- Communication under restrictive regimes.
- Internal communication in privacy-focused organizations.

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- NPM
- Metamask with Sepolia ETH

---

## 🛠️ Installation & Running the App

```bash
git clone https://github.com/your-username/stealthcomm.git
cd stealthcomm
npm install
npm run start

---

## 🧭 Usage Guide

1. **Register & Login**  
   Create an account with a secure password.  
   ⚠️ *Passwords are not recoverable.* Forgetting your password will result in **deletion** of your account and chats.

2. **Fund Your Wallet**
   - Go to your **Profile** and copy your Ethereum address.
   - Transfer some **Sepolia ETH** to this address using a faucet or wallet.

3. **User Synchronization (Initial Pairing)**  
   To establish secure communication with another user:

   - **Step 1**: Enter a **common secret** (case-sensitive) on both devices. This is used to derive a 12-word mnemonic.
   - **Step 2**: Select a **sequence of 1–12 words** from the generated mnemonic **in the same order on both devices**.
   - **Step 3**: One user clicks **Receive**, the other clicks **Send**. Make sure the Receive Phase starts before the Send Phase else it will result in dropped syncronization messages.
     ⏳ It will auto-timeout in 2 minutes if it the synchronization does not succeed.

4. **Start Messaging**  
   Once synced, the user will appear in your chat list. Begin private, secure conversations.

---

## 🤝 Contributing

Let me know if you'd like to add screenshots, badges, or extra developer notes.