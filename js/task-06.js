const validInput = document.querySelector( '#validation-input');
const focusValidationInput = () => {
    console.log(validInput.value.length);

    if (Number(validInput.getAttribute('data-length')) !== validInput.value.length) {
        validInput.classList.remove('valid');
        validInput.classList.add('invalid');
    }
    else {
        validInput.classList.remove('invalid');
        validInput.classList.add('valid');
    }
};
validInput.addEventListener('blur', focusValidationInput);
