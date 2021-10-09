
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
        let type   = document.querySelector( '#selected-type' );
        let operation = document.querySelector( '#selected-operation' );
        let result;
        let key;

        if ( document.querySelector("#key-field") ) {
            key = document.querySelector("#key-field").value;
        } else {
            key = '';
        }

        if (operation.value == 'encrypt') {
            result = encrypt( input.value, key, type.value );
        } else {
            result = decrypt( input.value, key, type.value );
        }

        if (typeof result == 'string') {
            output.value = result;
        }else {
            output.value = result.toString();
        }

    } )

    function encrypt( text, key, type ) {

        let result;
        switch ( type ) {
            case 'md5':
                result = CryptoJS.MD5(text);
                break;
            case 'sha256':
                result = CryptoJS.SHA256(text);
                break;
            case 'aes':
                result = CryptoJS.AES.encrypt(text, key);
                break;
            case 'basic':
                result = btoa( text + ":" + key );
        }
        return result;
    }

    function decrypt( text, key, type ) {

        let result;
        switch ( type ) {
            case 'md5':
                result = 'This operation not available.'
                break;
            case 'sha256':
                result = 'This operation not available.'
                break;
            case 'aes':
                bytes = CryptoJS.AES.decrypt(text, key);
                result = bytes.toString(CryptoJS.enc.Utf8);
                break;
            case 'basic':
                result = 'This operation not available.'
        }
        return result;
    }

    resetBtn.addEventListener( "click", () => {
        let oprations = document.querySelectorAll('.operations input');
        let types = document.querySelectorAll('.types input');
        
        oprations.forEach(element => {
            element.checked = false;
            element.disabled = false;
        });

        types.forEach(element => {
            element.checked = false;
            element.disabled = false;
        });

        let input  = document.querySelector("#input-field");
        let output = document.querySelector("#output-field");

        if ( document.querySelector("#key-field") ) {
            let field = document.querySelector("#key-field").parentElement;
            let parent = document.querySelector(".fields");
            parent.removeChild( field.parentElement ); 
        }

        input.value = '';
        output.value = '';
    })

})()