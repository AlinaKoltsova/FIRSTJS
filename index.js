let counter = 0;
let inputButton = document.querySelector ('.inputButton');
let resetButton = document.querySelector ('.resetButton');
let counterText = document.querySelector ('.counter');//чтобы выбрать текст по классу


inputButton.addEventListener('click', function () {
    counter = counter + 1;
    counterText.innerText = counter;
});

resetButton.addEventListener('click', function () {
    counter = 0;
    counterText.innerText = counter;
});