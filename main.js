'use strict';
let title = 'Course by JavaScript';
let screens = 'Simple, complex, interactive';
let screenPrice = 1000;
let rollback = 34;
let fullPrice = 500;
let adaptive = true;
let lowerScreens = screens.toLowerCase();

console.log(typeof title);
console.log('Переменная screens имеет длинну равную ' + screens.length);
console.log('Стоимость верстки экранов ' + screenPrice * 90 + ' рублей/ ' +
  screenPrice + ' долларов/ ' + screenPrice * 29.4 + ' гривен/ ' + screenPrice * 6.37 + ' юаней');
console.log('Стоимость разработки сайта ' + fullPrice * 90 + ' рублей/ ' +
  fullPrice + ' долларов/ ' + fullPrice * 29.4 + ' гривен/ ' + fullPrice * 6.37 + ' юаней');
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(lowerScreens.split(", "));
console.log('Процент отката посреднику равен ' + fullPrice * (rollback / 100) + ' долларов');

let service1;
let service2;
let servicePrice1;
let servicePrice2;

title = prompt('Как называется ваш проект?', 'Название-сайта');
screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
adaptive = prompt('Нужен ли адаптив на сайте?', 'Если нет, остаьте поле пустым');
service1 = prompt('Какой дополнительный тип услуги нужен?');
servicePrice1 = +prompt('Сколько это будет стоить?');
service2 = prompt('Какой дополнительный тип услуги нужен?');
servicePrice2 = +prompt('Сколько это будет стоить?');
fullPrice = screenPrice + servicePrice1 + servicePrice2;

let rollbackPrice = fullPrice * (rollback / 100);
let servicePercentPrice = Math.ceil(fullPrice - rollbackPrice);

console.log(title);
console.log(screens);
console.log(screenPrice);
console.log(!!adaptive);
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
console.log(fullPrice);
console.log('Итоговая сумма ' + servicePercentPrice);

if (fullPrice > 30000) {
  console.log('Даем скидку в 10%');
} else if (15000 < fullPrice && fullPrice < 30000) {
  console.log('Даем скидку в 5%');
} else if (0 < fullPrice && fullPrice < 15000) {
  console.log('Скидка не предусмотрена');
} else if (fullPrice < 0) {
  console.log('Что то пошло не так');
}