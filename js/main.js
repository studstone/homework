'use strict';

const title = document.getElementsByTagName('h1')[0];
const button = document.getElementsByClassName('handler_btn');
const plusButton = document.querySelector('.screen-btn');
const div = document.querySelectorAll('.other-items.percent');
const div1 = document.querySelectorAll('.other-items.number');
const input = document.querySelector('.main-controls__range>input');
const span = document.querySelector('.main-controls__range>.range-value');
const elemInput = document.getElementsByClassName('total-input');
let divs = document.querySelectorAll('.screen');


console.log(title);
console.log(button[0], button[1]);
console.log(plusButton);
[].forEach.call(div, function (el) {
  console.log(el);
});
[].forEach.call(div1, function (el) {
  console.log(el);
});
console.log(input);
console.log(span);
[].forEach.call(elemInput, function (el) {
  console.log(el);
});
console.log(divs);