'use strict';

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 34;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt('Как называется ваш проект?', 'название-сайта');
  screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');

  screenPrice = +prompt('Сколько будет стоить данная работа?');

  do {
    screenPrice = +prompt('Сколько будет стоить данная работа?');
  } while (!isNumber(screenPrice));

  adaptive = confirm('Нужен ли адаптив на сайте?');
};

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {

    if (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?');
    } else if (i === 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?');
    }

    sum += +prompt('Сколько это будет стоить?');
  }

  return sum;
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}

const getTitle = function () {
  return title.trim()[0].toUpperCase() + title.trim().substring(1).toLowerCase();

};

const getServicePercentPrices = function () {
  return fullPrice - (fullPrice * (rollback / 100));
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10 %";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5 %";
  } else if (price >= 0 && price < 15000) {
    return "Скидка не предусмотрена";
  } else if (price < 0) {
    return "Что то пошло не так";
  }
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = Math.ceil(getServicePercentPrices());
title = getTitle();

console.log(getRollbackMessage(fullPrice));
console.log(title);
console.log('Адаптив', adaptive);
console.log(screens);
console.log('Сумма дополнительных услуг ' + allServicePrices);
console.log('Итоговая сумма ' + servicePercentPrice);
console.log('Стоимость верстки экрана ' + screenPrice + ' юани ' + 'и' + ' Стоимость разработки сайта ' + fullPrice + ' юани');