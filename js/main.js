'use strict';

const title = document.getElementsByTagName('h1')[0];
const buttonFirst = document.getElementsByClassName('handler_btn')[0];
const buttonSecond = document.getElementsByClassName('handler_btn')[1];
const plusButton = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');
const input = document.querySelector('.main-controls__range>input');
const span = document.querySelector('.main-controls__range>.range-value');
const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const totalFullCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];
let divScreen = document.querySelectorAll('.screen');


console.log(title);
console.log(buttonFirst);
console.log(buttonSecond);
console.log(plusButton);
[].forEach.call(otherItemsPercent, function (el) {
  console.log(el);
});
[].forEach.call(otherItemsNumber, function (el) {
  console.log(el);
});
console.log(input);
console.log(span);
console.log(total);
console.log(totalCount);
console.log(totalCountOther);
console.log(totalFullCount);
console.log(totalCountRollback);
console.log(divScreen);