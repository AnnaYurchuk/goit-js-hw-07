const counterValue = {
    value: 0,
    increment() {
        console.log('increment=> this', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement=>this', this);
        this.value -= 1;
    },
};
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', (event) =>{
    counterValue.decrement();
    console.log(counter);
    valueEl.textContent = counterValue.value;
});
    
incrementBtn.addEventListener('click',(event) => {
    counterValue.increment();
    console.log(counter);
    valueEl.textContent = counterValue.value;
});

