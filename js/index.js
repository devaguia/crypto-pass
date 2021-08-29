
(function () {

    // Operations
    var oprations = document.querySelectorAll('.operations input');
    // Types
    var types = document.querySelectorAll('.types input');
    // Buttos
    var submitBtn = document.querySelector("#submit-btn");
    var resetBtn =  document.querySelector("#reset-btn");

    oprations.forEach(element => {
        element.addEventListener( "click", () => {
            uncheck( oprations, 'operation', element )
        })
    });

    types.forEach(element => {
        element.addEventListener( "click", () => {
            uncheck( types, 'type', element )
        })
    });

    function uncheck( array, name, exclude ) {

        array.forEach( element => {
            if ( element == exclude ) {
                element.checked = "true";

                if ( name == 'type' ) {
                    let selected = document.querySelector( '#selected-type' );
                    selected.value = element.getAttribute('data-value');
                }

                if ( name == 'operation' ) {
                    let selected = document.querySelector( '#selected-operation' );
                    selected.value = element.getAttribute('data-value');

                }
                
            } else {
                element.checked = false;
            }
        });
    }


    submitBtn.addEventListener( "click", () => {

        let input  = document.querySelector("#input-field");
        let output = document.querySelector("#output-field");
        let type = document.querySelector( '#selected-type' );
        let operation = document.querySelector( '#selected-operation' );
        let result;

        if (operation.value == 'encrypt') {
            result = encrypt( input.value, type.value );
        } else {
            result = decrypt( input.value, type.value );
        }

        if (typeof result == 'string') {
            output.value = result;
        }else {
            output.value = result.toString();
        }

        //CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
    })

    function encrypt( text, type ) {

        let result;
        switch ( type ) {
            case 'md5':
                result = CryptoJS.MD5(text);
                break;
            case 'sha256':
                result = CryptoJS.SHA256(text);
                break;
            case 'aes':
                result = CryptoJS.AES.encrypt(text, '');
                break;
        }
        return result;
    }

    function decrypt( text, type ) {

        let result;
        switch ( type ) {
            case 'md5':
                result = 'This operation not available.'
                break;
            case 'sha256':
                result = 'This operation not available.'
                break;
            case 'aes':
                bytes = CryptoJS.AES.decrypt(text, '');
                result = bytes.toString(CryptoJS.enc.Utf8);
                break;
        }
        return result;
    }

    resetBtn.addEventListener( "click", () => {
        let oprations = document.querySelectorAll('.operations input');
        let types = document.querySelectorAll('.types input');
        
        oprations.forEach(element => {
            element.checked = false;
        });

        types.forEach(element => {
            element.checked = false;
        });

        let input  = document.querySelector("#input-field");
        let output = document.querySelector("#output-field");
        input.value = '';
        output.value = '';
    })

})()