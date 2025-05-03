// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

contract EncryptedKeyStore {
    event EncryptedKeys(
        bytes16 encryptedKeyIV,
        bytes encryptedKey
    );

    function submitEncryptedKeys(
        bytes16 keyIV,
        bytes calldata key
    ) external {

        emit EncryptedKeys(keyIV, key);
    }
}
