let title = 'Типы данных, операторы, методы и свойства';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 45;
let rollback = 12;
let fullPrice = 55000;
let adaptive = true;

console.log(typeof(title));
console.log(typeof(fullPrice));
console.log(typeof(adaptive));
console.log(screens.length);
console.log('Стоимость верстки экранов' + " " + screenPrice + " " + "рублей/ долларов/гривен/юани");
console.log('Стоимость разработки сайта' + " " + fullPrice + " " + "рублей/ долларов/гривен/юани");

let screensArray = screens.toLowerCase();
console.log(screensArray.split());

console.log('Процент отката посреднику за работу' + " : " + (fullPrice * (rollback/100)));