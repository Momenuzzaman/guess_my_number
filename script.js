// 'use strict';
// const massage = document.querySelector('.message').textContent = 'correct number';

// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 15;

// document.querySelector('.guess').value = 17;


document.querySelector('.check').addEventListener('click', function(){
    const guess =Number( document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
        document.querySelector('.message').textContent = 'Not a Number';
    }
});