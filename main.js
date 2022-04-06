'use strict';

let random = Math.ceil(Math.random() * 100);
console.log(random);
const nameBot = alert('Загадывание случайного числа от 1 до 100');


const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num) && num !== 0;
};


const botAsk = function () {
  let attempts = 10;


  const bot = function () {
    if (attempts > 0) {
      let askNumber = prompt('Угадай число от 1 до 100');
      if (askNumber) {
        if (askNumber > random) {
          --attempts;
          alert('Загаданное число меньше, осталось попыток ' + attempts);
          bot();
        } else if (askNumber < random) {
          --attempts;
          alert('Загаданное число больше, осталось попыток ' + attempts);
          bot();
        } else if (!isNumber(askNumber)) {
          --attempts;
          alert('Введи число! Осталось попыток ' + attempts);
          bot();
        } else {
          confirm('Вы угадали!!! Хотели бы сыграть еще?') ? botAsk() : alert('До свидания');
        }
      } else {
        alert('Игра окончена');
      }
    } else {
      confirm('Попытки закончились, хотите сыграть еще ?') ? botAsk() : alert('До свидания');
    }
  };

  bot();
};
botAsk();