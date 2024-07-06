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

let allServicePrices,
    fullPrice,
    servicePercentPrice;

function showTypeOf(variable){
    console.log(variable, typeof variable);
}

function getRollbackMessage(price){
    switch(true){
        case price > 30000:
            return "Даем скидку в 10%";
        case price > 15000 && price <= 30000:
            return "Даем скидку в 5%"; 
        case price <= 15000 && price > 0:
            return "Скидка не предусмотрена";
        case price <= 0:
            return 'Что то пошло не так';
        default:
            return 'Ни одно из условий не истинно';
    }
}
    

function getAllServicePrices(servicePrice1, servicePrice2){
    return servicePrice1 + servicePrice2;
}

const getFullPrice = function(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices;
    
}

function getTitle(title){
    return title.charAt(0).toUpperCase() + title.trim().slice(1).toLowerCase();
}

function getServicePercentPrices(fun, back){
    return fun - back;
}

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice =  getFullPrice(screenPrice, allServicePrices);

console.log(title = getTitle(title));
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice = getServicePercentPrices(fullPrice, rollback));
console.log(typeof(title));
console.log(typeof(fullPrice));
console.log(typeof(adaptive));
console.log(screens.length);