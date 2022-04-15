const button = document.querySelector('#btn');
const input = document.querySelector('#text');
const circle = document.querySelector('#circle');
const inputRange = document.querySelector('#range');
const span = document.querySelector('#range-span');


const backgroundColor = function (e) {
  e.target.style.backgroundColor = input.value;
  input.value = '';
};

const sizeCircle = function (e) {
  console.log(e.target.value);
  span.textContent = e.target.value;
  circle.style.display = '';
  circle.style.cssText = `width: ${e.target.value}%; height: ${e.target.value}%;`;
};


button.addEventListener('click', backgroundColor);
inputRange.addEventListener('input', sizeCircle);