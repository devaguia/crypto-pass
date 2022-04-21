import CryptoJS from "crypto-js";

export class MD5 {
    decrypt(label) {
        return CryptoJS.MD5(label);
    }

    encrypt(label) {
        return CryptoJS.MD5(label);
    }
}