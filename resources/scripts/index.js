import { CryptoPass } from "./cryptoPass";

class Document {
    constructor() {
        this.Crypto  = new CryptoPass;
        this.Method = undefined;
        this.Type   = undefined;

        this.copy();
        this.selectedMethod();
        this.selectedType();
        this.operations();
        this.reset();
        this.doubleFields();
    }

    doubleFields() {
        const types = document.querySelectorAll(".types input");

        types.forEach(type => {
            type.addEventListener("change", () => {
                if(type.checked) {
                    const key = document.querySelector("#input-key");
                    if ( type.classList.contains("double-options") ) {
                        key.classList.remove("input-disabled");
                    } else {
                        key.classList.add("input-disabled");
                    }
                }
            });
        });
    }

    selectedMethod() {
        const methods = document.querySelectorAll(".operations input");

        methods.forEach(method => {
            method.addEventListener("change", () => {
                if(method.checked) {
                    this.Method = method.getAttribute("data-value");

                    const disabled = [
                        "md5-option",
                        "sha256-option"
                    ];

                    if (this.Method === "decrypt") {
                        disabled.forEach(item => {
                            const element = document.querySelector(`#${item}`);
                            element.setAttribute("disabled", "disabled");
                            this.defaultTypes();
                        });
                    } else {
                        disabled.forEach(item => {
                            const element = document.querySelector(`#${item}`);
                            element.removeAttribute("disabled");
                        });
                    }
                }
            });
        });
    }

    selectedType() {
        const types = document.querySelectorAll(".types input");

        types.forEach(type => {
            type.addEventListener("change", () => {
                if(type.checked) {
                    this.Type = type.getAttribute("data-value");
                }
            });
        });
    }

    reset() {
        const btn = document.querySelector("#reset-btn");

        btn.addEventListener("click", () => {
            this.defaultMethods();
            this.defaultTypes();
        });
    }

    defaultMethods() {
        const methods = document.querySelectorAll(".operations input");
        this.Method  = undefined;

        methods.forEach(method => {
            method.checked = false;
        });
    }

    defaultTypes() {
        const types = document.querySelectorAll(".types input");
        this.Type  = undefined;

        types.forEach(type => {
            type.checked = false;
        });
    }

    operations() {
        const btn  = document.querySelector("#submit-btn");
        const text = document.querySelector("#input-field");
        const key  = document.querySelector("#input-key");

        const output  = document.querySelector("#output-field");

        btn.addEventListener("click", () => {
            this.Crypto.setMethod(this.Method);
            this.Crypto.setType(this.Type);
            this.Crypto.setText(text.value);
            this.Crypto.setKey(key.value);

            var response;

            switch (this.Method) {
                case "encrypt":
                    response = this.Crypto.encrypt();
                    break;

                case "decrypt":
                    response = this.Crypto.encrypt();
                    break;
            
                default:
                    response = false;
                    break;
            }

            if (!response) {
                output.value = "Invalid method!";

                setTimeout(() => {
                    output.value = "";
                }, 1000);

                return;
            }

            output.value = response;
        });
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