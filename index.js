'use strict';

let nameProject = prompt('Как называется ваш проект?');
let title = nameProject;
//console.log(title);

let typeScreens = prompt('Какие типы экранов нужно разработать?');
let screens = typeScreens;
//console.log(screens);

let workPrice = +prompt('Сколько будет стоить данная работа?');
let screenPrice = workPrice;
//console.log(screenPrice);

let adaptivSite = confirm('Нужен ли адаптив на сайте?');
let adaptive = adaptivSite;
//console.log(adaptive);

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');

let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

let rollback = 12;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback/100)));
console.log(servicePercentPrice);

switch(true){
    case fullPrice > 30000:
        console.log("Даем скидку в 10%");
        break;
    case fullPrice > 15000 && fullPrice <= 30000:
        console.log("Даем скидку в 5%");
        break; 
    case fullPrice <= 15000 && fullPrice > 0:
        console.log("Скидка не предусмотрена");
        break;
    case fullPrice <= 0:
        console.log('Что то пошло не так');
        break;
    default:
        console.log('Ни одно из условий не истинно');
}
