export class SHA256 {
    decrypt(label) {
        return CryptoJS.SHA256.encrypt(label)
    }

    encrypt(label) {
        return CryptoJS.SHA256(label)
    }
}