const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


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

    // document.querySelector('.main-block_button_orange').addEventListener('click', function(){
    //     document.querySelector('.popup').classList.add('active');
    // });

    // document.querySelector('.popup .close-btn').addEventListener('click', function(){
    //     document.querySelector('.popup').classList.remove('active');
    // });

    let popUp = document.querySelector('.popup');
    let popupForm = document.querySelector('.form');
    let openPopupButton = document.querySelector('.main-block_button_orange');
    let closePopupButton = document.querySelector('.close')

    closePopupButton.addEventListener('click', function() {
        popUp.classList.remove('active');
    })

    openPopupButton.addEventListener('click', function(e) {
        e.preventDefault();
        popUp.classList.add('active');
    })
