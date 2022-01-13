const resetButton = document.querySelector('#clear-board');
const board = document.querySelector('#pixel-board');
const input = document.querySelector('#board-size');
const buttonInput = document.querySelector('#generate-board');

const colorPixels = (e) => {
  const myColor = document.querySelector('.color').value;
  e.target.style.backgroundColor = myColor
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
      myPixel.addEventListener("click", colorPixels);
    }
  })
}

window.onload = initialize();

function lessThanFive() {
  newLine(5);

  const pixelLine = document.querySelectorAll(".pixel-line");

  pixelLine.forEach((item) => {
    for (let i = 0; i < 5; i += 1) {
      const myPixel = document.createElement("div");
      myPixel.className = "pixel";
      myPixel.style.backgroundColor = "white";
      item.appendChild(myPixel);
      myPixel.addEventListener("click", colorPixels);
    }
  });
}

function moreThanFifty() {
  newLine(50);

  const pixelLine = document.querySelectorAll(".pixel-line");

  pixelLine.forEach((item) => {
    for (let i = 0; i < 50; i += 1) {
      const myPixel = document.createElement("div");
      myPixel.className = "pixel";
      myPixel.style.backgroundColor = "white";
      item.appendChild(myPixel);
      myPixel.addEventListener("click", colorPixels);
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
    myPixel.addEventListener("click", colorPixels);
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
    document.location.reload();
  } else {
    const lines = document.querySelectorAll('.pixel-line');
    lines.forEach((item) => board.removeChild(item))
  }
  createBoard();
}

buttonInput.addEventListener('click', deleteBoard);

const enter = (e) => (e.key === "Enter") ? (deleteBoard(), e.target) : stop;

input.addEventListener("keyup", enter);

const clearBoard = () => {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((item) => item.style.backgroundColor = 'white');
}

resetButton.addEventListener('click', clearBoard);
