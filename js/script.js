const title = document.getElementsByTagName('h1')[0];
const handlerBtn = document.getElementsByClassName('handler_btn');
const handlerBtnStart = handlerBtn[0];
const handlerBtnReset = handlerBtn[1];
const screenBtn = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');
const input = document.querySelector('.rollback input[type=range]');
const span = document.querySelector('.rollback span');
const totalInputs = document.getElementsByClassName('total-input');
const totalInput = totalInputs[0];
const totalInputCount = totalInputs[1];
const totalInputExtra = totalInputs[2];
const totalInputSum = totalInputs[3];
const totalInputRollback = totalInputs[4];
let screens = document.querySelectorAll('.screen');

