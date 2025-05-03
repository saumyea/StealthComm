// const crypto = require('crypto');
import crypto from 'crypto';

function getKeyFromString(key) {
    // We use SHA-256 to hash the string and get exactly 32 bytes (256 bits)
    return crypto.createHash('sha256').update(key).digest();
}

export function encryptMsg(text, symmetricKey) {
    const iv = crypto.randomBytes(16); // AES requires a 16-byte IV
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(symmetricKey, 'hex'), iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    // Return IV and the encrypted data
    return iv.toString('hex') + ':' + encrypted;
}

export function decryptMsg(encryptedText, symmetricKey) {
    try{
        const parts = encryptedText.split(':');
        const iv = Buffer.from(parts[0], 'hex');
        const encrypted = parts[1];
    
        const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(symmetricKey, 'hex'), iv);
        let decrypted = decipher.update(encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }catch(err){
        return err.message;
    }
}

// module.exports = { encryptMsg , decryptMsg };