const title = 'Course by JavaScript';
console.log(typeof title);
let screens = 'Simple, complex, interactive';
console.log('Переменная screens имеет длинну равную ' + screens.length);
let screenPrice = 1000;
console.log('Стоимость верстки экранов ' + screenPrice * 90 + ' рублей/ ' + screenPrice + ' долларов/ ' + screenPrice * 29.4 + ' гривен/ ' + screenPrice * 6.37 + ' юаней');
let rollback = 34;
let fullPrice = 500;
console.log('Стоимость разработки сайта ' + fullPrice * 90 + ' рублей/ ' + fullPrice + ' долларов/ ' + fullPrice * 29.4 + ' гривен/ ' + fullPrice * 6.37 + ' юаней');
console.log(typeof fullPrice);
let adaptive = true;
console.log(typeof adaptive);

let lowerScreens = screens.toLowerCase();
console.log(lowerScreens.split(", "));
console.log('Процент отката посреднику равен ' + fullPrice * (rollback / 100) + ' долларов');
//alert("Приветстыую на сайте");
//console.log("Приветствую в консоли");