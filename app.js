const nameInput = document.getElementById('name');
const button = document.getElementById('generate');
const firstName = document.getElementById('first-name');
const colorBlue = document.getElementById('blue');
const colorOrange = document.getElementById('orange');
const colorYellow = document.getElementById('yellow');
let backgroundColor = document.getElementById('colors');
let bottomColor = document.getElementById('color');

button.addEventListener('click', ()=>{
    let newName = nameInput.value;
    firstName.textContent = newName;
});

colorBlue.addEventListener('click', ()=>{
    backgroundColor.style.background = 'blue';
    bottomColor.style.background = 'blue';
});

colorOrange.addEventListener('click', ()=>{
    backgroundColor.style.background = 'orange';
    bottomColor.style.background = 'orange';
});

colorYellow.addEventListener('click', ()=>{
    backgroundColor.style.background = 'yellow';
    bottomColor.style.background = 'yellow';
});