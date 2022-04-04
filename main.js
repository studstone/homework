'use strict';

let random = Math.ceil(Math.random() * 10);
console.log(random);
const nameBot = alert('Загадывание случайного числа от 1 до 100');


const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num) && num !== 0;
};

const bot = function () {
  let askNumber = prompt('Угадай число от 1 до 100');


  if (askNumber) {
    if (askNumber > random) {
      alert('Загаданное число меньше');
      bot();
    } else if (askNumber < random) {
      alert('Загаданное число больше');
      bot();
    } else if (!isNumber(askNumber)) {
      alert('Введи число!');
      bot();
    } else {
      alert('Поздравляю, Вы угадали!!!');
    }
  } else {
    alert('Игра окончена');
  }

};
bot();