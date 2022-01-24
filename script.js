// 'use strict';
// const massage = document.querySelector('.message').textContent = 'correct number';

// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 15;

// document.querySelector('.guess').value = 17;

const secretNumber = Math.round(Math.random() *20);
document.querySelector('.number').textContent = secretNumber;

 let score = 20;
 document.querySelector('.score').textContent=score;

document.querySelector('.check').addEventListener('click', function(){
    const guess =Number( document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
        document.querySelector('.message').textContent = 'Not a Number';
    }
    else if(guess === secretNumber){
      document.querySelector('.message').textContent = 'correct number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    }
    else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too High!';
            score --;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'lose the game';
            document.querySelector('.score').textContent = 0;
        }
    }
    else if(guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too Low!';
            score --;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'lose the game';
            document.querySelector('.score').textContent = 0;
        }
    }
});