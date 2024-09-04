'use strict'

const title = document.getElementsByTagName('h1')[0];
const handlerBtn = document.getElementsByClassName('handler_btn');
const handlerBtnStart = handlerBtn[0];
const handlerBtnReset = handlerBtn[1];
const screenBtn = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');
const inputRange = document.querySelector('.rollback input[type=range]');
const span = document.querySelector('.rollback span');
const totalInputs = document.getElementsByClassName('total-input');
const totalInput = totalInputs[0];
const totalInputCount = totalInputs[1];
const totalInputExtra = totalInputs[2];
const totalInputSum = totalInputs[3];
const totalInputRollback = totalInputs[4];
let screens = document.querySelectorAll('.screen');


const appData = {
    rollback : 0,
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    servicePricesPersent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    count: 0,
    init: function(){
        appData.addTitle();
        handlerBtnStart.addEventListener('click', appData.checkError);
        screenBtn.addEventListener('click', appData.addScreenBlock);
        appData.addRollback();
        //appData.checkInputs(); 
    },
    addTitle: function(){
        document.title = title.textContent;
    },
    checkError: function(){
        screens = document.querySelectorAll('.screen');

        appData.isError = false;

        screens.forEach(function(screen){
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            if(select.value === '' || input.value.trim() === ''){
                appData.isError = true;
            }
        })
        if(!appData.isError){
            appData.start();
        }
    },

    start: function(){
        appData.addScreens();
        appData.addServices();
        appData.addPrices();

        // appData.logger();
        console.log(appData)
        appData.showResult();
    },

    isValidString: function (str) {
        return typeof str === 'string' && str.trim() !== '' && /[a-zA-Zа-яА-Я]/.test(str);
    },

    showResult: function(){
        totalInput.value = appData.screenPrice;
        totalInputExtra.value = appData.servicePricesPersent + appData.servicePricesNumber;
        totalInputSum.value = appData.fullPrice;
        totalInputRollback.value = appData.servicePercentPrice;
        totalInputCount.value = appData.count;
    },

    addScreens: function(){
        screens = document.querySelectorAll('.screen');
        screens.forEach(function(screen, index){
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            appData.screens.push({
                id: index,
                name: selectName,
                count: +input.value,
                price: +select.value * +input.value
            });

        })
    },

    addServices: function(){
        otherItemsPercent.forEach((item)=>{
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if(check.checked){
                appData.servicesPercent[label.textContent] = +input.value;
            }
        })

        otherItemsNumber.forEach((item)=>{
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if(check.checked){
                appData.servicesNumber[label.textContent] = +input.value;
            }
        })
    },

    addScreenBlock: function(){
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length -1].after(cloneScreen);
    },

    addPrices: function(){
        for(let screen of appData.screens){
            appData.screenPrice += +screen.price;
            appData.count += +screen.count;
        }

        for(let key in appData.servicesNumber){
            appData.servicePricesNumber +=  appData.servicesNumber[key];
        }

        for(let key in appData.servicesPercent){
            appData.servicePricesPersent += appData.screenPrice * (appData.servicesPercent[key] / 100);
        }
        appData.fullPrice =  +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPersent;
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },

    addRollback: function(){
        inputRange.addEventListener('input', (event)=>{
            let inputValue = event.target.value;
            span.textContent = `${inputValue}%`;
            appData.rollback = inputValue;

            appData.updateServicePercentPrice();
            appData.showResult();
        })
        console.log(appData.rollback)
    },

    updateServicePercentPrice: function() {
        appData.servicePercentPrice = Math.round(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
    },
    // checkInputs: function() {
    //     document.body.addEventListener('input', () => {
    //         handlerBtnStart.disabled = Array.from(screens).some(screen => {
    //             const select = screen.querySelector('select');
    //             const input = screen.querySelector('input');
    //             return select.value === '' || input.value.trim() === '';
    //         });
    //     });
    
    //     handlerBtnStart.disabled = true;
    // },

    logger: function(){
        /*for (let key in appData) {
            console.log(`${key}: ${appData[key]}`);
        }*/
        //console.log(appData.screens);
        //console.log(appData.services);
        console.log(typeof appData.title);
    }
    
}

appData.init();