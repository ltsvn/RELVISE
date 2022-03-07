const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);


function emailValidation() {
    if (document.getElementById('subscribe-text').value.match(validRegex)) {
        const sbButton = document.getElementById('subscribe-text').value;
        
    } else {
        const button = document.querySelector('subscribe-button');
        button.disabled = true;
    }
}

function emailSubmitButton(){
    alert(sbButton);
        document.getElementById('subscribe-text').value = "";
}


    // function myEmail()
    // let x1 = document.getElementById('subscribe-text').value;
    //     alert(x1);
    //     document.getElementById('subscribe-text').value = "";