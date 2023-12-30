'use strict';

//initital dom manip
//document.querySelector('.message').textContent;
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!😍';
// //once again
// console.log(document.querySelector('.message').textContent);

// //changing the ? and score val
// document.querySelector('.secretNumber').textContent = 13;
// document.querySelector('.score').textContent = 10;

// //to get the input val

// //document.querySelector('.guess').value;
// document.querySelector('.guess').value = 23;
// // we set the val to 23
// console.log(document.querySelector('.guess').value);
// //then we read it

//now we want the val to be only console logged when we click on the check button

//main development
// document.querySelector('.check').addEventListener('click', function () {
//   console.log(
//     `${
//       document.querySelector('.guess').value
//     } you really thought you ate, try again!`
//   );
//   document.querySelector('.message').textContent = 'Correct Number!😍';
// });

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //we added secretNumber as when we get user input we get it in string and subsequently we have to compare it with a secretNumber so we did.
  console.log(guess);

  //no input
  if (!guess) {
    document.querySelector(
      '.message'
    ).textContent = `You have'nt even entered any value.`;

    //when user wins, the number will be displayed as contrary to before when the first two lines in the condn block were written out of this if condn
  } else if (guess === secretNumber) {
    document.querySelector('.secretNumber').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Correct Number!😍';
    document.querySelector('body').style.backgroundColor = '#5BB258';
    document.querySelector('.secretNumber').style.width = '24rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      //as this is one of the wrong scenarios
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost, Click again to restart the game.';
      document.querySelector('body').style.backgroundColor = '#B25F58';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      //as this is one of the wrong scenarios
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost, Click again to restart the game.';
      document.querySelector('body').style.backgroundColor = '#B25F58';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//handling the again button

// Coding Challenge #1

//Implement a game rest functionality, so that the player can make a new guess! Here is how:

// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the score and secretNumber variables
// 3. Restore the initial conditions of the message, number, score and guess input field
// 4. Also restore the original background color (#222) and number width (15rem)

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  document.querySelector('.secretNumber').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.secretNumber').style.width = '15rem';
});
