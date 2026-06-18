const hamburger = document.querySelector('.hambuger');
const navi = document.querySelector('.navi');

hamburger.addEventListener('click', () => {
    navi.classList.toggle('open');
});