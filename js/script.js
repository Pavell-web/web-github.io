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
    showPrice(0);
}


let areaInput = document.getElementById('area');
let fillingInput = document.getElementById('filling');
let rendersInput = document.getElementById('renderNumbers');

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
    rendersValue = Number(rendersInput.value);
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

    console.log('цена до свич' + price);

    switch(renders) {
        case 4: price += 300; break;
        case 5: price += 300 * 2; break;
        case 6: price += 300 * 3; break;
        case 7: price += 300 * 4; break;
        case 8: price += 300 * 5; break;
        default: break;
    }
    console.log('цена после свич' + price);
    console.log(areaValue);
    console.log(fillingValue);
    console.log(rendersValue);
    console.log(typeof(rendersValue));
    
      return parseInt(price);  
}


let showPrice = function(price) {
    let result = document.querySelector('.result');
    result.textContent = `Стоимость визуализации: ${price} рублей`;
}


countBtn.onclick = function() {
    showPrice(getPrice(areaValue, fillingValue, rendersValue));
}

