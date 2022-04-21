import result from "autoprefixer/data/prefixes";
import { AES } from "./inc/AES";
import { MD5 } from "./inc/md5";
import { SHA256 } from "./inc/SHA256";

export class CryptoPass
{
    constructor(text, key, method, type)
    {
        this._text   =  text ? text : false;
        this._key    =  key ? key : false;
        this._method =  method ? method : false;
        this._type   =  type ? type : false;
    }

    encrypt() {
        var result;

        switch ( this._type ) {
            case 'md5':
                result = this.md5();
                break;
            case 'sha256':
                result = this.SHA256();
                break;
            case 'aes':
                result = this.AES();
                break;
            case 'basic':
                result = btoa( text + ":" + key );
            default:
                result = false;
        }

        return result;
    }

    decrypt() {
        var result;
        
        switch ( this._type ) {
            case 'md5':
                result = this.md5();
                break;
            case 'sha256':
                result = this.SHA256();
                break;
            case 'aes':
                result = this.AES();
                break;
            case 'basic':
                result = btoa( text + ":" + key );
            default:
                result = false;
        }

        return result;
    }

    md5() {
        const md5 = new MD5();

        if (this._method === "decrypt") {
            return md5.decrypt(this._text);
        } else {
            return md5.encrypt(this._text);
        }
    }

    SHA256() {
        const sha256 = new SHA256();

        if (this._method === "decrypt") {
            return sha256.decrypt(this._text);
        } else {
            return sha256.encrypt(this._text);
        }
    }

    AES() {
        const aes = new AES();
        
        if (this._method === "decrypt") {
            return aes.decrypt(this._text, this._key);
        } else {
            return aes.encrypt(this._text, this._key);
        }
    }

    getKey () {
        return this._key
    }

    setKey (value) {
        this._key = value;
    }

    getText () {
        return this._text
    }

    setText (value) {
        this._text = value;
    }

    getMethod () {
        return this._method
    }

    setMethod (value) {
        this._method = value;
    }

    getType () {
        return this._tyoe
    }

    setType (value) {
        this._type = value;
    }
}