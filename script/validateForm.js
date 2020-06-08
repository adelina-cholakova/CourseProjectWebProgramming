const FULLNANE_ERROR_CONTAINER = 'fullname-error-container';
const EMAIL_ERROR_CONTAINER = 'email-error-container';
const DATE_TIME_ERROR_CONTAINER = 'date-time-error-container';

function onFormSubmit(event){
    event.preventDefault();
    validateForm();
}

function validateForm() {
    let fullname = document.getElementById('fullname').value.trim();
    let fullnameIsValid = true;

    let email = document.getElementById('email').value.trim();
    let emailIsValid = true;

    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let dateTimeIsValid = true;

    clearErrorMessages([FULLNANE_ERROR_CONTAINER, EMAIL_ERROR_CONTAINER, DATE_TIME_ERROR_CONTAINER]);

    if(fullname === ''){
        showErrorMessage('Please enter your name.', FULLNANE_ERROR_CONTAINER);
        fullnameIsValid = false;
    }

    if(fullname.length < 3 && fullnameIsValid){
        showErrorMessage('Name should be more than 3 characters', FULLNANE_ERROR_CONTAINER);
        fullnameIsValid = false;
    }

    if(email === ''){
        showErrorMessage('Please, enter an email.', EMAIL_ERROR_CONTAINER);
        emailIsValid = false;
    }
    if((email.indexOf('@') === -1 || email.indexOf('.') === -1) && emailIsValid){
        showErrorMessage('Your email is not valid!', EMAIL_ERROR_CONTAINER);
        emailIsValid = false;
    }
    if(date === '' || time === '') {
        showErrorMessage('Please enter date and time', DATE_TIME_ERROR_CONTAINER);
        dateTimeIsValid = false;
    }
    if((new Date(date) <= new Date()) && dateTimeIsValid) {
        showErrorMessage('Please enter a future date', DATE_TIME_ERROR_CONTAINER);
        dateTimeIsValid = false;
    }

    return {
        success: (fullnameIsValid && emailIsValid && dateTimeIsValid)
    };
}

function showErrorMessage(message, id) {
    document.getElementById(id).innerText = message;
}

function clearErrorMessages(idArray) {
    idArray.map(id => {
        document.getElementById(id).innerText = '';
    })
}
