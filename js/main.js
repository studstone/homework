'use strict';
const title = document.getElementsByTagName('h1')[0];
const plusButton = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const input = document.querySelector('.main-controls__range>input');
const span = document.querySelector('.main-controls__range>.range-value');

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const totalFullCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');

const appData = {
  title: '',
  screens: [],
  count: [],
  screenPrice: 0,
  numberScreens: 0,
  adaptive: true,
  rollback: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},

  init: function () {
    appData.addTitle();
    startBtn.addEventListener('click', function (e) {
      e.preventDefault();
      appData.disabledButton();
    });
    plusButton.addEventListener('click', appData.addScrinBlock);
    input.addEventListener('input', appData.loger);
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  start: function () {
    appData.addScreens();
    appData.addServicec();
    appData.addPrices();
    appData.showResult();
    appData.reset();
  },
  reset: function () {
    if (appData.count.length !== 0 && screens !== 0) {
      appData.count.length = 0;
      appData.screens.length = 0;
      appData.servicePricesPercent = 0;
      appData.servicePricesNumber = 0;
    }
  },
  validate: function () {
    screens = document.querySelectorAll('.screen');
    let isValide = false;
    screens.forEach(function (screen) {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      if (select.value && input.value) {
        isValide = true;
      }
      if (!select.value || !input.value) {
        isValide = false;
      }
    });
    return isValide;
  },
  disabledButton: function () {
    if (appData.validate()) {
      appData.start();
    }
  },
  loger: function (event) {
    span.textContent = event.target.value;
    appData.rollback = +event.target.value;
  },
  showResult: function () {
    total.value = appData.screenPrice;
    totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
    totalFullCount.value = appData.fullPrice;
    totalCountRollback.value = appData.servicePercentPrice;
    totalCount.value = appData.numberScreens;
  },
  addScreens: function () {
    screens = document.querySelectorAll('.screen');

    screens.forEach(function (screen, index) {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value
      });

      appData.count.push({
        amount: +input.value
      });
    });
  },
  addServicec: function () {
    otherItemsPercent.forEach(function (item) {
      const chek = item.querySelector('input[type=checkbox]');
      const lable = item.querySelector('label');
      const input = item.querySelector('input[type=text]');
      if (chek.checked) {
        appData.servicesPercent[lable.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach(function (item) {
      const chek = item.querySelector('input[type=checkbox]');
      const lable = item.querySelector('label');
      const input = item.querySelector('input[type=text]');
      if (chek.checked) {
        appData.servicesNumber[lable.textContent] = +input.value;
      }
    });
  },
  addScrinBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    const input = cloneScreen.querySelector('input');
    input.value = '';
    plusButton.before(cloneScreen);
  },
  addPrices: function () {
    if (total.value === '0') {
      for (let screen of appData.screens) {
        appData.screenPrice += +screen.price;
      }
    } else {
      appData.screenPrice = 0;
      for (let screen of appData.screens) {
        appData.screenPrice += +screen.price;
      }
    }

    if (totalCount.value === '0') {
      for (let count of appData.count) {
        appData.numberScreens += +count.amount;
      }
    } else {
      appData.numberScreens = 0;
      for (let count of appData.count) {
        appData.numberScreens += +count.amount;
      }
    }

    if (totalCountOther.value === '0') {
      for (let key in appData.servicesNumber) {
        appData.servicePricesNumber += appData.servicesNumber[key];
      }

      for (let key in appData.servicesPercent) {
        appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
      }
    } else {
      totalCountOther.value = 0;
      for (let key in appData.servicesNumber) {
        appData.servicePricesNumber += appData.servicesNumber[key];
      }

      for (let key in appData.servicesPercent) {
        appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
      }
    }
    appData.fullPrice = appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber;

    appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
  },

};