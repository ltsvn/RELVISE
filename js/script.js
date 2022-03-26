const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function emailValidation() {
    if (document.getElementById('subscribe-text').value.match(validRegex)) {
        const sbButton = document.getElementById('subscribe-text').value;
        alert(sbButton);
        
        
    } else {
        const button = document.querySelector('subscribe-button');
        button.disabled = true;
    }
}

function emailSubmitButton(){
    alert(sbButton);
        document.getElementById('subscribe-text').value = "";
}


    

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
    });
    ihuioujklj
    
    btn.addEventListener('click',function validateForm() {
        var isValid = true;
        var htmlFormFieldTitle = document.forms["email"].value;
   
        if (htmlFormFieldTitle == "" && htmlFormFieldAuthor =="" && htmlFormFieldFirst_name =="" && htmlFormFieldLast_name =="") {
              alert('some fields are mandatory')
               isValid= false;
                       }
         if (isValid = True){
           popUp();
           }
        });


   