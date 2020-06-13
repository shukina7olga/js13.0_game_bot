'use strict'; 
const numBot = function() {
    let n = Math.floor(Math.random() * 10 + 1);
    console.log('numBot', n, typeof n);
    const numBotInto = function() {
        let num = +prompt('Угадай число от 1 до 100');
        console.log('numBotInto', num, typeof num);

        if(isNaN(num) === true) {
            let f = confirm('Введи число!');
            if(f === false) {
                return; 
            }
            numBotInto();
        } else if(n < num) {
            let f = confirm('Загаданное число меньше');
            if(f === false) {
                return; 
            }
            numBotInto();
        } else if(n > num) {
            let f = confirm('Загаданное число больше');
            if(f === false) {
                return; 
            }
            numBotInto();
        } else if(n === num) {
            alert('Угадали, теперь вас возьмут на работу в гугл!');
            return;
        }  else {
            return;
        } 
    };
    numBotInto();
};
numBot();

/*
let s = prompt('Введи число!'); // +-confirm       undefined  alert     null prompt  
console.log(s); */
