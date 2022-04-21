export class MD5 {
    decrypt(label) {
        return CryptoJS.MD5(label)
    }

    encrypt(label) {
        return CryptoJS.MD5(label)
    }
}