'use strict';

let random = Math.ceil(Math.random() * 100);
console.log(random);
const nameBot = alert('Загадывание случайного числа от 1 до 100');


const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num) && num !== 0;
};

const botAsk = function () {
  let askNumber = prompt('Угадай число от 1 до 100');

  const bot = function () {
    if (askNumber) {
      if (askNumber > random) {
        alert('Загаданное число меньше');
        botAsk();
      } else if (askNumber < random) {
        alert('Загаданное число больше');
        botAsk();
      } else if (!isNumber(askNumber)) {
        alert('Введи число!');
        botAsk();
      } else {
        alert('Поздравляю, Вы угадали!!!');
      }
    } else {
      alert('Игра окончена');
    }
  };
  bot();
};
botAsk();