(function() {
    var options = document.querySelectorAll('.double-options');
    var types = document.querySelectorAll('.types input');
    var decrypt = document.querySelector('#decrypt-option');
    var encrypt = document.querySelector('#encrypt-option')

    options.forEach(element => {
        element.addEventListener("change", () => {
            if (element.checked) {
                createFields();
            }
        })
    });

    decrypt.addEventListener("change", () => {
        if (decrypt.checked) {
            types.forEach(type => {
                type.checked = false;
                type.disabled = true;
                options.forEach(element => {
                    if (element != type || element.getAttribute("id") !== "basic-option" ) {
                        element.disabled = false;
                    }
                });
            });
        }
    });

    encrypt.addEventListener("change", () => {
        if (encrypt.checked) {
            types.forEach(type => {
                type.disabled = false;
            });
            
           removeElements();
        }
    });

    types.forEach(type => {
        type.addEventListener("change", () => {
            if ( type.checked ) {
                isDouble = type.classList.contains('double-options');

                if ( ! isDouble ) {
                    removeElements();
                }
            }
        })
    })

    function removeElements() {

        if ( document.querySelector("#key-field") ) {
            let field = document.querySelector("#key-field").parentElement;
            let parent = document.querySelector(".fields");
            parent.removeChild( field.parentElement ); 
        }
    }

    function createFields() {

        if ( document.querySelector("#key-field") ) {
            return;   
        }
        let div   = document.createElement("div");
        let label = document.createElement("label");
        let divF  = document.createElement("div");
        let field = document.createElement("input");

        label.innerHTML = 'Content Key'

        field.setAttribute("id","key-field");

        divF.appendChild(field);

        div.classList = "field";
        div.appendChild(label);
        div.appendChild(divF);

        let parent = document.querySelector(".fields");
        let before = document.querySelector("#output-field");

        parent.insertBefore(div, (before.parentElement).parentElement)
    }
})()