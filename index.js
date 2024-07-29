'use strict';

const appData = {
    rollback : 12,
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    start: function(){
        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice =  appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.title = appData.getTitle();
        appData.logger();
    },
    asking : function(){
        appData.title = prompt('Как называется ваш проект?', "my project");
        appData.screens = prompt('Какие типы экранов нужно разработать?', 'full');
        
        do {
            appData.screenPrice = prompt('Сколько будет стоить данная работа?');
        } while(!appData.isNumber(appData.screenPrice));
    
        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },

    isNumber : function(num){
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    getRollbackMessage: function(price){
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
    },
    getAllServicePrices: function(){
        let sum = 0;
    
        for (let i = 0; i < 2; i++){
            let price = 0;
    
            if(i === 0){
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
            } else if(i === 1){
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
            }
    
            do { price = prompt('Сколько это будет стоить?')
            } while(!appData.isNumber(price))
            
            sum += +price;
        }
        return sum;
    },

    getFullPrice : function() {
        return +appData.screenPrice + appData.allServicePrices;
        
    },

    getTitle : function(){
        return appData.title.charAt(0).toUpperCase() + appData.title.trim().slice(1).toLowerCase();
    },
    
    getServicePercentPrices: function(){
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    logger: function(){
        for (let key in appData) {
            console.log(`${key}: ${appData[key]}`);
        }
    }
    
}

appData.start();