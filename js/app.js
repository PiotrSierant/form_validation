'use strict';
function validate(form) {
    const errorMessages = {
    };
    if (!form.elements.email.value.includes('@')) {
        errorMessages.email = 'Email musi zawierać znak @.';
    }
    if (form.elements.firstName.value.trim().length <= 2) {
        errorMessages.firstName = 'Imię musi być dłuższe niż 2 znaki';
    }
    if (form.elements.lastName.value.trim().length <= 2) {
        errorMessages.lastName = 'Nazwisko musi być dłuższe niż 2 znaki.';
    }
    if (form.elements.pass1.value.length === 0) {
        errorMessages.pass1 = 'Hasło nie może być puste.';
    } else if (form.elements.pass1.value !== form.elements.pass2.value) {
        errorMessages.pass1 = 'Wpisane hasła muszą być jednakowe.';
    }
    if (!form.elements.agree.checked) {
        errorMessages.agree = 'Musisz zaakceptować warunki.';
    }
    return errorMessages;
}
function renderErrorMes(errorMessages) {
    console.log(errorMessages);
    const elements = document.querySelectorAll('.design');
    elements.forEach(function (element) {
        if(errorMessages[element.dataset.name]) {
            element.textContent = errorMessages[element.dataset.name];
            element.style.display = 'inline';
        } else {
            element.style.display = 'none';
            element.textContent = '';
        }
    })
}
function showSuccessMessage() {
    successMessageElement.textContent = 'Formularz wysłany!';
    successMessageElement.classList.remove('d-none');
}
function hideSuccessMessage() {
    successMessageElement.textContent = '';
    successMessageElement.classList.add('d-none');
}
const form = document.querySelector('form.registration-form');
const errorMessageElement = document.querySelector('#error-message');
const successMessageElement = document.querySelector('#success-message');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const errorMessages = validate(this);
    console.log(errorMessages);
    console.log(Object.entries(errorMessages));
    renderErrorMes(errorMessages);
    hideSuccessMessage();
    if (Object.entries(errorMessages).length === 0) {
        showSuccessMessage();
    }
});
const button = document.querySelector('button');
button.style.marginBottom = '20px';
const card = document.querySelector('.card');
card.style.marginBottom = '50px';
const info = document.querySelectorAll('.design');
info.forEach(function (info) {
    info.style.fontSize = '9px';
    info.style.color = 'rgba(114, 28, 36,1)';
    info.style.backgroundColor = 'rgba(248, 215, 218, 1)';
    info.style.padding = '5px';
    info.style.border = '1px solid rgba(220, 53, 69, 1)';
    info.style.borderRadius = '10px';
    info.style.marginLeft = '10px';
    info.style.display = 'none';
})
