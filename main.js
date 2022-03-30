'use strict';

const title = prompt('Как называется ваш проект?', 'Название-сайта');
const screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
const screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
const adaptive = prompt('Нужен ли адаптив на сайте?', 'Если нет, остаьте поле пустым');
const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = +prompt('Сколько это будет стоить?');
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = +prompt('Сколько это будет стоить?');
const rollback = 34;

const getAllServicePrices = function (a, b) {
  return a + b;
};
let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

let fullPrice = getFullPrice(screenPrice, allServicePrices);
const rollbackPrice = fullPrice * (rollback / 100);

function getFullPrice(a, b) {
  return a + b;
}

const getTitle = function (str) {
  const str2 = str.trim().toLowerCase();
  return str2[0].toUpperCase() + str2.slice(1);

};

const getServicePercentPrices = function (a, b) {
  return a - b;
};
let servicePercentPrice = Math.ceil(getAllServicePrices(fullPrice, rollbackPrice));

const getRollbackMessage = function (price) {
  if (fullPrice >= 30000) {
    return "Даем скидку в 10 %";
  } else if (fullPrice >= 15000 && fullPrice < 30000) {
    return "Даем скидку в 5 %";
  } else if (fullPrice >= 0 && fullPrice < 15000) {
    return "Скидка не предусмотрена";
  } else if (fullPrice < 0) {
    return "Что то пошло не так";
  }
};


console.log(getTitle(title));
console.log(screens);
console.log(screenPrice);
console.log(!!adaptive);
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
console.log(fullPrice);
console.log('Сумма дополнительных услуг ' + allServicePrices);
console.log('Итоговая сумма ' + servicePercentPrice);
console.log(getRollbackMessage(fullPrice));