let calcBtn = document.querySelector('.btn-calc');
let calcWindow = document.querySelector('.calc-window');

calcBtn.onclick = function() {
    console.log('click');
    calcWindow.classList.toggle('calc-window-hidden');
}