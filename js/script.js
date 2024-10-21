const slider = document.getElementById('percentageSlider');
const output = document.getElementById('percentageValue');
const burgerHeaderNode = document.querySelector('.header__burger');
const menuHeaderNode = document.querySelector('.header__menu');

slider.oninput = function() {
    output.textContent = this.value;
}

burgerHeaderNode.addEventListener('click', () => {
    burgerHeaderNode.classList.toggle('active');
    menuHeaderNode.classList.toggle('active');
    document.body.classList.toggle('lock');
});