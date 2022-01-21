const letter = document.querySelector('#carta-gerada');
const generateLetterButton = document.querySelector('#criar-carta');
const input = document.querySelector('#carta-texto');
const counter = document.querySelector('#carta-contador');

const generateLetter = () => {
  const myText = input.value;
  const textArray = myText.split(' ');
  const arrayItems = textArray.length;
  counter.innerText = arrayItems;
  textArray.forEach((item) => {
    const wordSpan = document.createElement("span");
    const text = item;
    wordSpan.innerText = text;
    letter.appendChild(wordSpan);
  })
}

const clearParagraph = () => {
  if (!input.value || input.value === ' ') {
    letter.innerText = 'Please, type the letter content.';
  } else {
    letter.innerText = '';
    const myLetter = document.querySelectorAll('#carta-gerada span');
    myLetter.forEach((item) => letter.removeChild(item));
    generateLetter();
  }
}

generateLetterButton.addEventListener('click', clearParagraph);

const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotation = ['rotateleft', 'rotateright'];
const inclination = ['skewleft', 'skewright'];

const pickStyle = () => {
  const styleLength = style.length;
  const myStyleInex = Math.floor(Math.random() * styleLength);
  const myStyle = style[myStyleInex];
  return myStyle;
}

const pickSize = () => {
  const sizeLength = size.length;
  const mySizeInex = Math.floor(Math.random() * sizeLength);
  const mySize = size[mySizeInex];
  return mySize;
}

const pickRotation = () => {
  const rotationLength = 2;
  const myRotationInex = Math.floor(Math.random() * rotationLength);
  const myRotation = rotation[myRotationInex];
  return myRotation;
}

const pickInclination = () => {
  const inclinationLength = 2;
  const myInclinationInex = Math.floor((Math.random() * inclinationLength));
  const myInclination = inclination[myInclinationInex];
  return myInclination;
}

const changeClasses = (e) => {
  e.target.className = '';
  e.target.classList.add(pickStyle());
  e.target.classList.add(pickSize());
  e.target.classList.add(pickRotation());
  e.target.classList.add(pickInclination());
}

const pickClasses = () => {
  const myWords = document.querySelectorAll('span');
  myWords.forEach((item) => {
    item.addEventListener("click", changeClasses);
    item.classList.add(pickStyle());
    item.classList.add(pickRotation());
    item.classList.add(pickSize());
    item.classList.add(pickInclination());
  })
}

generateLetterButton.addEventListener('click', pickClasses);
