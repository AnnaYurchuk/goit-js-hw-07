const fontSizeControl = document.querySelector('#font-size-control');
const refText = document.querySelector('#text');
refText.style.fontSize = '15px'

const fn =(e) => {
    refText.style.fontSize= `${e.target.value}px`
    
}

fontSizeControl.addEventListener ('input',fn)
