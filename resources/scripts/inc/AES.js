export class AES {
    decrypt(label, secret) {
        return CryptoJS.AES.decrypt(label, secret)
    }

    encrypt(label, secret) {
        return CryptoJS.AES.encrypt(label, secret)
    }
}