export function uint8ArrayToHex(uint8Array) {
    // Create a Buffer from the Uint8Array and convert to hex string
    return Buffer.from(uint8Array).toString('hex');
}

export function hexToUint8Array(hexString) {
    // Create a Buffer from the hex string and convert it to Uint8Array
    return new Uint8Array(Buffer.from(hexString, 'hex'));
}

export function uint8ArrayArrayToHex(uint8ArrayArray) {
    // Map over each Uint8Array and convert each to a hex string, then join all hex strings together
    return uint8ArrayArray.map(uint8Array => 
        Buffer.from(uint8Array).toString('hex')  // Convert each Uint8Array to hex
    ).join('');  // Join them together into a single string
}

// Convert a hex string back to an array of Uint8Array
export function hexToUint8ArrayArray(hexString, sizeOfEachArray) {
    const uint8ArrayArray = [];
    for (let i = 0; i < hexString.length; i += sizeOfEachArray * 2) {
        const hexSegment = hexString.slice(i, i + sizeOfEachArray * 2); // Get the next segment
        const uint8Array = new Uint8Array(Buffer.from(hexSegment, 'hex'));  // Convert back to Uint8Array
        uint8ArrayArray.push(uint8Array);  // Push the resulting Uint8Array to the array
    }
    console.log(uint8ArrayArray)
    return uint8ArrayArray;
}

// Convert Uint8Array(32) to Base64
export function uint8ArrayToBase64(uint8Array) {
    const binaryString = String.fromCharCode(...uint8Array);
    return btoa(binaryString);
}
  
  // Convert Base64 to Uint8Array(32)
export function base64ToUint8Array(base64) {
    const binaryString = atob(base64);
    const uint8Array = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        uint8Array[i] = binaryString.charCodeAt(i);
    }
    return uint8Array;
}

// module.exports = {uint8ArrayToHex, hexToUint8Array, uint8ArrayArrayToHex, hexToUint8ArrayArray, uint8ArrayToBase64, base64ToUint8Array};