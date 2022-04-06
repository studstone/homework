'use strict';

const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: '',
  service2: '',

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num !== 0;
  },

  asking: function () {
    appData.title = prompt('Как называется ваш проект?', 'название-сайта');
    appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');

    do {
      appData.screenPrice = +prompt('Сколько будет стоить данная работа?');
    } while (!appData.isNumber(appData.screenPrice));

    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },

  getAllServicePrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {

      if (i === 0) {
        appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
      } else if (i === 1) {
        appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
      }

      sum += +prompt('Сколько это будет стоить?');
    }

    return sum;
  },
  getFullPrice: function () {
    return appData.screenPrice + appData.allServicePrices;
  },
  getTitle: function () {
    return appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase();

  },
  getServicePercentPrices: function () {
    return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
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
    for (let key in appData) {
      console.log(key + ' ' + appData[key]);
    }
  },
  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = Math.ceil(appData.getServicePercentPrices());
    appData.title = appData.getTitle();
    appData.loger();
  },

};

appData.start();