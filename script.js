// 'use strict';
// const massage = document.querySelector('.message').textContent = 'correct number';

// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 15;

// document.querySelector('.guess').value = 17;

let secretNumber = Math.round(Math.random() *20);


 let score = 20;
 document.querySelector('.score').textContent=score;

 let highscore = 0;

 const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
 };

document.querySelector('.check').addEventListener('click', function(){
    const guess =Number( document.querySelector('.guess').value);
    
    if(!guess){
        // document.querySelector('.message').textContent = 'Not a Number';
        displayMessage('Not a Number');
    }
    else if(guess === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
    //   document.querySelector('.message').textContent = 'correct number!';
        displayMessage('correct number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if(score > highscore){
        highscore = score;

    document.querySelector('.highscore').textContent = highscore;
      }
    }
    else if(guess !== secretNumber){
        if(score > 1){
            // document.querySelector('.message').textContent =
            //  guess > secretNumber ? 'Too High!' : 'Too Low';
            displayMessage( guess > secretNumber ? 'Too High!' : 'Too Low');
            score --;
            document.querySelector('.score').textContent = score;
        }
        else{
            // document.querySelector('.message').textContent = 'lose the game';
            displayMessage('lose the game');
            document.querySelector('.score').textContent = 0;
        }
    }
    // else if(guess > secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Too High!';
    //         score --;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent = 'lose the game';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    // else if(guess < secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Too Low!';
    //         score --;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent = 'lose the game';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});
document.querySelector('.again').addEventListener('click', function(){

    score = 20;
    secretNumber = Math.round(Math.random() *20);

    document.querySelector('.number').textContent = '?';

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage( 'Start guessing...');

    document.querySelector('.score').textContent = score;

    document.querySelector('.guess').value = '';

    document.querySelector('.number').style.color = '#333';

    document.querySelector('body').style.backgroundColor = '#222';
});