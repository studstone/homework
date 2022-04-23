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

const select = document.querySelector('select');
const mainControlsInput = document.querySelectorAll('.main-controls__input>input[type=text]');
const customCheckbox = document.querySelectorAll('input[type=checkbox]');

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
    this.addTitle();
    startBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.disabledButton();
    });
    plusButton.addEventListener('click', this.addScrinBlock);
    input.addEventListener('input', this.loger.bind(this));
    resetBtn.addEventListener('click', this.unReset.bind(this));
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  start: function () {
    this.addScreens();
    this.addServicec();
    this.addPrices();
    this.showResult();
    this.reset();
  },
  validate: function () {
    screens = document.querySelectorAll('.screen');
    let isValide = false;
    screens.forEach((screen) => {
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
    if (this.validate()) {
      this.start();
    }
  },
  loger: function (event) {
    span.textContent = event.target.value;
    this.rollback = +event.target.value;
  },
  showResult: function () {
    total.value = this.screenPrice;
    totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber;
    totalFullCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
    totalCount.value = this.numberScreens;
  },
  addScreens: function () {
    screens = document.querySelectorAll('.screen');

    screens.forEach((screen, index) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;

      this.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value
      });

      this.count.push({
        amount: +input.value
      });
    });
  },
  addServicec: function () {
    otherItemsPercent.forEach((item) => {
      const chek = item.querySelector('input[type=checkbox]');
      const lable = item.querySelector('label');
      const input = item.querySelector('input[type=text]');
      if (chek.checked) {
        this.servicesPercent[lable.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach((item) => {
      const chek = item.querySelector('input[type=checkbox]');
      const lable = item.querySelector('label');
      const input = item.querySelector('input[type=text]');
      if (chek.checked) {
        this.servicesNumber[lable.textContent] = +input.value;
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
    for (let screen of this.screens) {
      this.screenPrice += +screen.price;
    }
    for (let count of this.count) {
      this.numberScreens += +count.amount;
    }
    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }
    for (let key in this.servicesPercent) {
      this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
    }
    this.fullPrice = this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;
    this.servicePercentPrice = Math.ceil(this.fullPrice - (this.fullPrice * (this.rollback / 100)));
  },
  addAttributeDisabled: function () {
    select.setAttribute("disabled", "disabled");
    mainControlsInput.forEach(element => element.setAttribute("disabled", "disabled"));
  },
  addStyle: function () {
    resetBtn.style.display = 'block';
    startBtn.style.display = 'none';
  },
  clearObject: function () {
    this.screens = [];
    this.count = [];
    this.screenPrice = 0;
    this.numberScreens = 0;
    this.servicePricesPercent = 0;
    this.servicePricesNumber = 0;
    this.fullPrice = 0;
    this.servicePercentPrice = 0;
    this.servicesPercent = {};
    this.servicesNumber = {};
  },
  reset: function () {
    this.addAttributeDisabled();
    this.addStyle();
    this.clearObject();
  },
  deleteAttributeDisabled: function () {
    select.removeAttribute("disabled");
    mainControlsInput.forEach(element => element.removeAttribute("disabled"));
  },
  deleteStyle: function () {
    resetBtn.style.display = 'none';
    startBtn.style.display = 'block';
  },
  unChecking: function () {
    customCheckbox.forEach(element => element.checked = false);
  },
  clearValue: function () {
    total.value = 0;
    totalCountOther.value = 0;
    totalFullCount.value = 0;
    totalCountRollback.value = 0;
    totalCount.value = 0;
    mainControlsInput[0].value = '';
    select.options[0].selected = 'selected';
    input.value = 0;
    span.textContent = '0%';
  },
  deleteScrinBlock: function () {
    const cloneScreen = document.querySelectorAll('.main-controls__item.screen');
    cloneScreen.forEach((element, index) => {
      if (index !== 0) {
        element.remove();
      }
    });
  },
  unReset: function () {
    this.clearValue();
    this.deleteAttributeDisabled();
    this.deleteStyle();
    this.unChecking();
    this.deleteScrinBlock();
    this.init();
  }
};

appData.init();