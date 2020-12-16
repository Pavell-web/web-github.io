let calcBtn = document.querySelector('.btn-calc');
let calcWindow = document.querySelector('.calc-window');
let countBtn = document.querySelector('.btn-count');
let closeBtn = document.querySelector('.close-calc');

calcBtn.onclick = function() {
    console.log('click');
    calcWindow.classList.remove('calc-window-hidden');
}

closeBtn.onclick = function() {
    calcWindow.classList.add('calc-window-hidden');
}


let areaInput = document.getElementById('area');
let fillingInput = document.getElementById('filling');
let rendersInput = document.getElementById('render-numbers');

let areaValue;
let fillingValue;
let rendersValue;

areaInput.oninput = function() {
    areaValue = parseInt(areaInput.value);
    console.log(areaValue);
}

fillingInput.oninput = function () {
    fillingValue = fillingInput.value;
    console.log(fillingValue);
}

rendersInput.oninput = function () {
    rendersValue = rendersInput.value;
    console.log(rendersValue)
}

let getPrice = function(area, filling, renders) {
    let price = 300;
    if (area <= 5) {
        price = price * area * 2;
    }
    else {
        price *= area;
    }

    if (filling == 2) {
        price *= 1.1;
    }
    else if (filling == 3) {
        price *= 1.2;
    }

    switch(renders) {
        case 4: price += 300; break;
        case 5: price += 300 * 2; break;
        case 6: price += 300 * 3; break;
        case 7: price += 300 * 4; break;
        case 8: price += 300 * 5; break;
        case 9: price += 300 * 6; break;
        case 10: price += 300 * 7; break;
        default: break;
    }
    console.log(areaValue);
    console.log(fillingValue);
    console.log(rendersValue);
    
      return price;  
}


let showPrice = function(price) {
    let result = document.querySelector('.result');
    result.textContent = `Стоимость визуализации: ${price} рублей`;
}


countBtn.onclick = function() {
    showPrice(getPrice(areaValue, fillingValue, rendersInput));
}

