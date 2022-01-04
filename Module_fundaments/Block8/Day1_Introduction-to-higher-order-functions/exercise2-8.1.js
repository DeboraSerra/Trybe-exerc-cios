const checkBet = (number, draw) => {
  if (number === draw) {
    return 'Congratulations! You win!!'
  } else {
    return 'Try again'
  }
}

const draw = (number, func) => {
  const myNumber = number;
  const myDraw = Math.floor(Math.random() * 5);
  return func(myNumber, myDraw);
}

console.log(draw(1, checkBet))