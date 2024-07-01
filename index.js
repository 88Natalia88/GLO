'use strict';

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

let rollback = 12;

let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback/100)));

let allServicePrices,
    fullPrice;

function getAllServicePrices(){
    allServicePrices = servicePrice1 + servicePrice2;
}

const getFullPrice = function(){
    fullPrice = screenPrice + allServicePrices;
}

function getTitle(){
    
}
function getServicePercentPrices(fun, back){
    servicePercentPrice = fun - back;
}

getAllServicePrices();
getFullPrice();
getServicePercentPrices(getFullPrice(), rollback);

console.log(servicePercentPrice);