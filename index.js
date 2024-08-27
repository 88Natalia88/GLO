'use strict'

const book = document.querySelectorAll('.book');
const adv = document.querySelector('.adv');
const bookUl = book[2].querySelector('ul');
const title = document.querySelectorAll('.book h2 a');
const liBook1 = book[0].querySelectorAll('.book li');
const liBook5 = book[5].querySelectorAll('.book li');
const liBook6 = book[2].querySelectorAll('.book li');
const newLi = document.createElement('li');
const body = document.body;

body.style.backgroundImage = 'url(./img/you-dont-know-js.jpg)';

newLi.innerHTML = 'Глава 8: За пределами ES6';

book[0].before(book[1]);
book[2].before(book[4]);
book[5].before(book[2]);
book[5].after(book[2]);

adv.remove();

title[4].textContent = 'Книга 3. this и Прототипы Объектов';

liBook1[4].before(liBook1[6]);
liBook1[4].before(liBook1[8]);
liBook1[10].before(liBook1[2]);

liBook5[2].before(liBook5[9]);
liBook5[4].after(liBook5[2]);
liBook5[7].after(liBook5[5]);

bookUl.append(newLi);
liBook6[9].before(newLi); 

