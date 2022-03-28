const title = 'Course by JavaScript';
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