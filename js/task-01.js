const itemEl =
const allLi = document.querySelectorAll('li.item')
console.log(`В списке ${allLi.length} категории`);

allLi.forEach(el => {
    console.log(el.querySelector('h2').textContent);
    console.log(el.querySelectorAll('li').length);
})