const nameSpan = document.querySelector('#name-output');
const nameInput = document.querySelector('#name-input');

const changeWord = 'незнакомец';
 nameSpan.textContent = changeWord;

const textInput = (e) => {
    if (e.target.value.length > 0) {
       nameSpan.textContent = e.target.value;   
    }
    else {
        nameSpan.textContent = changeWord;
        
    }
}
nameInput.addEventListener('input',textInput);