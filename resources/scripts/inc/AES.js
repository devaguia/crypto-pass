import CryptoJS from "crypto-js";

export class AES {
    decrypt(label, secret) {
        const bytes = CryptoJS.AES.decrypt(label, secret);
        return bytes.toString(CryptoJS.enc.Utf8);
    }

    encrypt(label, secret) {
        return CryptoJS.AES.encrypt(label, secret);
    }
}