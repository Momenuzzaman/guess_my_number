// 'use strict';
// const massage = document.querySelector('.message').textContent = 'correct number';

// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 15;

// document.querySelector('.guess').value = 17;

const secretNumber = Math.round(Math.random() *20);
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function(){
    const guess =Number( document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
        document.querySelector('.message').textContent = 'Not a Number';
    }
    else if(guess === secretNumber){
      document.querySelector('.message').textContent = 'correct number!';
    }
    else if(guess > secretNumber){
        document.querySelector('.message').textContent = 'Too High!';
    }
    else if(guess < secretNumber){
        document.querySelector('.message').textContent = 'Too Low!';
    }
});