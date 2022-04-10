'use strict';

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: [],

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num !== 0;
  },

  isString: function (str) {
    return isNaN(str) && str !== 0;
  },

  asking: function () {
    do {
      appData.title = prompt('Как называется ваш проект?', 'название-сайта');
    } while (!appData.isString(appData.title));


    for (let i = 0; i < 2; i++) {
      let name = '';
      let price = 0;

      do {
        name = prompt('Какие типы экранов нужно разработать?');
      } while (!appData.isString(name));

      do {
        price = +prompt('Сколько будет стоить данная работа?');
      } while (!appData.isNumber(price));

      appData.screens.push({
        id: i,
        name: name,
        price: price
      });
    }


    appData.adaptive = confirm('Нужен ли адаптив на сайте?');

    for (let i = 0; i < 2; i++) {
      let name = '';
      let price = 0;

      do {
        name = prompt('Какой дополнительный тип услуги нужен?');
      } while (!appData.isString(name));

      do {
        price = +prompt('Сколько это будет стоить?');
      } while (!appData.isNumber(price));

      appData.services.push({
        id: i,
        name: name,
        price: price
      });
    }

  },

  addPrices: function () {
    // for (let screen of appData.screens) {
    //   appData.screenPrice += screen.price;
    // }

    appData.screenPrice = appData.screens.reduce(function (sum, item) {
      return sum + item.price;
    }, 0);

    // for (let service of appData.services) {
    //   appData.allServicePrices += service.price;
    // }

    appData.allServicePrices = appData.services.reduce(function (sum, item) {
      return sum + item.price;
    }, 0);
  },

  getFullPrice: function () {
    appData.fullPrice = appData.screenPrice + appData.allServicePrices;
  },
  getTitle: function () {
    appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase();

  },
  getServicePercentPrices: function () {
    appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
  },
  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даем скидку в 10 %";
    } else if (price >= 15000 && price < 30000) {
      return "Даем скидку в 5 %";
    } else if (price >= 0 && price < 15000) {
      return "Скидка не предусмотрена";
    } else if (price < 0) {
      return "Что то пошло не так";
    }
  },
  loger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
    console.log(appData.services);
  },
  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    Math.ceil(appData.getServicePercentPrices());
    appData.getTitle();
    appData.loger();
  },

};
appData.start();