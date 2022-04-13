const books = document.querySelectorAll('.books');
const book = document.querySelectorAll('.book');
const divAdv = document.querySelector('.adv');
const body = document.querySelector('body');
const bookLink = document.querySelectorAll('div>h2>a');
const bookListSecond = book[0].querySelectorAll('ul>li');
const bookListFifth = book[5].querySelectorAll('ul>li');
const bookListSixth = book[2].querySelectorAll('ul>li');
const newElement = document.createElement('li');


divAdv.remove();

book[0].before(book[1]);
book[0].after(book[4]);
book[4].after(book[3]);
book[2].before(book[5]);

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

bookLink[4].textContent = 'Книга 3. this и Прототипы Объектов';

bookListSecond[1].after(bookListSecond[3]);
bookListSecond[3].after(bookListSecond[6]);
bookListSecond[6].after(bookListSecond[8]);
bookListSecond[10].after(bookListSecond[2]);

bookListFifth[1].after(bookListFifth[9]);
bookListFifth[9].after(bookListFifth[3]);
bookListFifth[3].after(bookListFifth[4]);
bookListFifth[8].before(bookListFifth[5]);

newElement.textContent = 'Глава 8: За пределами ES6';
bookListSixth[8].after(newElement);