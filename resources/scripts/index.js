import { CryptoPass } from "./cryptoPass";

class Document {
    constructor() {
        this.crypto = new CryptoPass;
        this.copy();
    }

    copy() {
        const button = document.querySelector('#copy-item');

        button.addEventListener("click", copyPixURL);

        function copyPixURL() {
            const element = document.querySelector('#output-field');
            element.select();
            document.execCommand('copy');
        
            const fieldText = element.value;
        
            element.value = 'The text was copied!';
        
            setTimeout(() => {
                element.value = fieldText;
            }, 1000);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    return new Document;
});