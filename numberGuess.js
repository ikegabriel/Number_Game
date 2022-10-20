let prompt = require('prompt-sync')();

let range = 2;
let user = { username: '', points: 0, attempts: 0 };
let randomNum = Math.floor(Math.random() * range) + 1;
user.username = prompt('Please enter your username >>> ');

function guess() {

  userGuess = prompt(`Guess a number between 1 and ${range} >>> `);

  if (Number(userGuess) == randomNum) {
    user.attempts += 1
    range += 1
    user.points += 1
    console.log(`You win ${user.username}!!! :)\n
    Your guess was ${userGuess} and the number is ${randomNum}\n
        Your attempts : ${user.attempts}\n
        Your points : ${user.points}\n`);
    let tryAgain = prompt('Press Y to play again or press X to quit >>> ');

    if (tryAgain == 'x' || tryAgain == 'X') {
      console.log('Thank you for playing');
      return null
    }
    else if (tryAgain == 'y' || tryAgain == 'Y') {
      console.log(tryAgain)
      guess()
    }
    else {
      console.log('Invalid input')
      return null;
    }
  }
  else if (!userGuess) {
    console.log('Invalid Input')
    guess()
  }
  else {
    user.attempts += 1
    console.log(`You guessed wrong ${user.username}, the number is ${randomNum}, and your guess was ${userGuess} :(\n
        Your attempts : ${user.attempts}\n
        Your points : ${user.points}\n`);
    let tryAgain = prompt('Press Y to play again or press X to quit >>> ');

    if (tryAgain == 'x' || tryAgain == 'X') {
      console.log('Thank you for playing');
      // process.exit();
      return null
    }
    else if (tryAgain == 'y' || tryAgain == 'Y') {
      console.log(tryAgain)
      guess();
    }
    else {
      console.log('Invalid input')
      return null;
    }
  };
};

guess()
