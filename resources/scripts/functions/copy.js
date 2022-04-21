(function() {

    const button = document.querySelector('#copy-icon');

    button.addEventListener("click", copyPixURL);

    function copyPixURL() {
        const el = document.querySelector('#output-field');
        el.select();
        document.execCommand('copy');
    
        const fieldText = el.value;
    
        el.value = 'The text was copied!';
    
        setTimeout(() => {
            el.value = fieldText;
        }, 1000);
    }
})()
