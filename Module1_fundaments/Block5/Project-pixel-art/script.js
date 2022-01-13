const colors = document.querySelectorAll('.color');
const resetButton = document.querySelector('#clear-board');
const firstColor = document.querySelectorAll('.color');
const board = document.querySelector('#pixel-board');
const input = document.querySelector('input');
const buttonInput = document.querySelector('#generate-board');

const randomNumber = () => {
  const number = parseInt(Math.random() * 255 + 1);
  return number;
}

firstColor.forEach((color, i) =>
  i === 0
    ? (color.style.backgroundColor = "black")
    : (color.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`)
);

const colorPixel = (e) => {
  const myColor = document.querySelector('.selected').style.backgroundColor;
  (e.target.style.backgroundColor !== myColor)
    ? e.target.style.backgroundColor = myColor
    : e.target.style.backgroundColor = 'white';
}

const newLine = (x) => {
  for (let i = 0; i < x; i += 1) {
    let pixelLine = document.createElement("div");
    pixelLine.className = "pixel-line";
    board.appendChild(pixelLine);
  }
}

const initialize = () => {
  newLine(5);

  let pixelLine = document.querySelectorAll('.pixel-line');

  pixelLine.forEach((item) => {
    for (let i = 0; i < 5; i += 1) {
      const myPixel = document.createElement("div");
      myPixel.className = "pixel";
      myPixel.style.backgroundColor = "white";
      item.appendChild(myPixel);
      myPixel.addEventListener("click", colorPixel);
    }
  })
}

window.onload = initialize();

function lessThanFive() {
  newLine(5);

  let pixelLine = document.querySelectorAll(".pixel-line");

  pixelLine.forEach((item) => {
    for (let i = 0; i < 5; i += 1) {
      const myPixel = document.createElement("div");
      myPixel.className = "pixel";
      myPixel.style.backgroundColor = "white";
      item.appendChild(myPixel);
      myPixel.addEventListener("click", colorPixel);
    }
  });
}

function moreThanFifty() {
  newLine(50);

  let pixelLine = document.querySelectorAll(".pixel-line");

  pixelLine.forEach((item) => {
    for (let i = 0; i < 50; i += 1) {
      const myPixel = document.createElement("div");
      myPixel.className = "pixel";
      myPixel.style.backgroundColor = "white";
      item.appendChild(myPixel);
      myPixel.addEventListener("click", colorPixel);
    }
  });
}

const createLine = () => {
  let pixelLine = document.querySelectorAll(".pixel-line");
  const number = input.value;
  for (let x = 0; x < number; x += 1) {
    const myPixel = document.createElement("div");
    myPixel.className = "pixel";
    myPixel.style.backgroundColor = "white";
    pixelLine[x].appendChild(myPixel);
    myPixel.addEventListener("click", colorPixel);
  }
}

const createBoard = () => {
  if (input.value < 5) {
    lessThanFive();
  } else if (input.value > 50) {
    moreThanFifty();
  } else {
    const myNumber = input.value;
    newLine(myNumber);
    for (let i = 0; i < myNumber; i += 1) {
      createLine();
    }
  }
}

const deleteBoard = () => {
  if (!input.value) {
    alert('Board inválido!');
    Location.reload();
  } else {
    const lines = document.querySelectorAll('.pixel-line');
    for (let i = 0; i < lines.length; i += 1) {
      board.removeChild(lines[i]);
    }
  }
  createBoard();
}

buttonInput.addEventListener('click', deleteBoard);

const enter = (e) => (e.key === "Enter") ? deleteBoard() : stop;

input.addEventListener("keyup", enter);


const selectColor = (e) => {
  colors.forEach((item) => item.classList.remove('selected'));
  e.target.classList.add('selected');
}

colors.forEach((item) => item.addEventListener('click', selectColor));

const clearBoard = () => {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((item) => item.style.backgroundColor = 'white');
}

resetButton.addEventListener('click', clearBoard);
