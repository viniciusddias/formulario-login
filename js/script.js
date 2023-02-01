class Validator {


    constructor() {
        this.validations = [

        ]
    }

// Validação dos campos

validate(form) {

// pegando os inputs
    let inputs = form.getElementByTagName('input');

// HTMLcolection -> array
    let inputsArray = [...inputs];

// loop nos imputs
inputsArray.forEach(function(input) {
    
})

}


}


let form = document.getElementById("register-form");
let sumit = document.getElementById("btn-submit");

let validator = new Validator();

// Evento que dispara as validações 
sumit.addEventListener('click', function(e) {
    
    e.preventDefault();

    validator.validate(form);
});