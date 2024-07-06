'use strict';

let rollback = 12;
let title;
let screens;
let screenPrice;
let adaptive;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function(num){
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function(){
    title = prompt('Как называется ваш проект?', "my project");
    screens = prompt('Какие типы экранов нужно разработать?', 'full');
    
    do {
        screenPrice = prompt('Сколько будет стоить данная работа?');
    } while(!isNumber(screenPrice));

    adaptive = confirm('Нужен ли адаптив на сайте?');
}

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
    

function getAllServicePrices(){
    let sum = 0;
    for (let i = 0; i < 2; i++){
        if(i === 0){
            service1 = prompt('Какой дополнительный тип услуги нужен?');
        } else if(i === 1){
            service2 = prompt('Какой дополнительный тип услуги нужен?');
        }

        let price = prompt('Сколько это будет стоить?');
        while(!isNumber(price)){
            price = prompt('Сколько это будет стоить?');
        }
        
        sum += +price;
    }
    return sum;
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

asking();
allServicePrices = getAllServicePrices();
fullPrice =  getFullPrice(screenPrice, allServicePrices);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(title = getTitle(title));
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice = getServicePercentPrices(fullPrice, rollback));
console.log(typeof(title));
console.log(typeof(fullPrice));
console.log(typeof(adaptive));
console.log(screens.length);