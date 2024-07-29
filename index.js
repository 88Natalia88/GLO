'use strict';

const appData = {
    rollback : 12,
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    start: function(){
        appData.asking();
        appData.addPrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();

        appData.logger();
    },

    isNumber : function(num){
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    asking : function(){
        appData.title = prompt('Как называется ваш проект?', "my project");

        for (let i = 0; i < 2; i++){
            let name = prompt('Какие типы экранов нужно разработать?');
            let price = 0;
            do {
                price = prompt('Сколько будет стоить данная работа?');
            } while(!appData.isNumber(price));

            appData.screens.push({id: i, name: name, price: price});
        }
        
        for (let i = 0; i < 2; i++){
            let price = 0;
            let name = prompt('Какой дополнительный тип услуги нужен?');
            
    
            do { price = prompt('Сколько это будет стоить?');
            } while(!appData.isNumber(price));
            
            //appData.services[name] = +price;
            appData.services[i] = {
                name: name,
                price: +price
            }
        }


        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },

    addPrices: function(){
        //for(let screen of appData.screens){
        //    appData.screenPrice += +screen.price;
        //}
        appData.screenPrice = appData.screens.reduce((sum, item) => {
            return sum + +item.price;
        }, 0);
            

        for(let key in appData.services){
            appData.allServicePrices +=  appData.services[key].price;
        }

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

    getFullPrice : function() {
        appData.fullPrice =  +appData.screenPrice + appData.allServicePrices;
        
    },

    getTitle : function(){
        appData.title =  appData.title.charAt(0).toUpperCase() + appData.title.trim().slice(1).toLowerCase();
    },
    
    getServicePercentPrices: function(){
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },

    logger: function(){
        for (let key in appData) {
            console.log(`${key}: ${appData[key]}`);
        }
        //console.log(appData.screens);
        console.log(appData.services);
    }
    
}

appData.start();