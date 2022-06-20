const { questionInt } = require('readline-sync');

const game = () => {
  const random = Math.floor(Math.random() * 10);

  const guess = questionInt('Guess a number between 0 and 10 ');

  if (random === guess) console.log('Congratulations! You guessed right!');
  else console.log(`Sorry... The right number was: ${random}`);

  const again = questionInt('Wanna play again? (1 -> yes, 2 -> no) ');

  if (again === 1) game();
  else console.log('Ok! See you soon!');
}
game();

module.exports = game;
