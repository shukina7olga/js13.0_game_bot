'use strict';
const numBot = function() {
    let n = 5;
    let num = prompt('Угадай число от 1 до 100');
    if(num === false) {
        alert('Игра окончена');
        numBot();
    } else if(num > n) {
        confirm('Загаданное число меньше');
        numBot();
    } else if(num < n) {
        confirm('Загаданное число больше');
        numBot();
    } else if(!isNaN(num) === true) {
        confirm('Введи число!');
        numBot();
    } 
    numBot();
};
numBot();


