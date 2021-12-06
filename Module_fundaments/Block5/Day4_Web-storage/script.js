let body = document.querySelector('body');
let header = document.querySelector('header');
let title = document.querySelector('#title');
let description = document.querySelector('#description');
let article = document.querySelector('article');
let sections = document.querySelectorAll('section');
let paragraph = document.querySelectorAll('p');
let footer = document.querySelector('footer');
let buttonDark = document.querySelector('#darkMode');
buttonDark.addEventListener('click', darkMode);
let buttonLight = document.querySelector('#lightMode');
buttonLight.addEventListener('click', lightMode);
let fairyButton = document.querySelector('#fairyMode');
fairyButton.addEventListener('click', fairyMode);
let link = document.querySelector('a');


function darkMode() {
  body.style.backgroundColor = 'rgb(0, 0, 0)';
  body.style.color = 'rgb(238, 238, 238)'
  header.style.backgroundColor = "rgb(0, 0, 0)";
  header.style.color = "rgb(238, 238, 238)";
  title.style.backgroundColor = "rgb(0, 0, 0)";
  title.style.color = "rgb(238, 238, 238)";
  title.style.fontFamily = 'monospace';
  title.style.fontSize = "4em";
  description.style.backgroundColor = "rgb(0, 0, 0)";
  description.style.color = "rgb(238, 238, 238)";
  description.style.borderBottom = '2px solid rgb(238, 238, 238)';
  description.style.fontFamily = 'monospace';
  description.style.fontSize = "25px";
  article.style.backgroundColor = "rgb(0, 0, 0)";
  article.style.color = "rgb(238, 238, 238)";
  for (let i = 0; i < sections.length; i += 1){
    sections[i].style.backgroundColor = "rgb(0, 0, 0)";
    sections[i].style.color = "rgb(238, 238, 238)";
  }
  for (let i = 0; i < paragraph.length; i += 1){
    paragraph[i].style.backgroundColor = "rgb(0, 0, 0)";
    paragraph[i].style.color = "rgb(238, 238, 238)";
    paragraph[i].style.fontFamily = 'monospace';
    paragraph[i].style.fontSize = "25px";
  }
  footer.style.backgroundColor = "rgb(0, 0, 0)";
  link.style.backgroundColor = "rgb(0, 0, 0)";
  link.style.color = "rgb(238, 238, 238)";
  buttonDark.style.backgroundColor = 'rgb(238, 238, 238)';
  buttonDark.style.color = 'black';
  buttonLight.style.backgroundColor = "rgb(238, 238, 238)";
  buttonLight.style.color = "black";
  fairyButton.style.color = 'black';
  fairyButton.style.backgroundColor = 'rgb(238, 238, 238)';
  localStorage.setItem('Mode', 'darkMode');
}

function lightMode() {
  body.style.backgroundColor = "rgb(238, 238, 238)";
  body.style.color = 'rgb(38, 38, 38)';
  header.style.backgroundColor = "rgb(238, 238, 238)";
  header.style.color = "rgb(38, 38, 38)";
  title.style.backgroundColor = "rgb(238, 238, 238)";
  title.style.color = "rgb(38, 38, 38)";
  title.style.fontFamily = 'sans-serif';
  title.style.fontSize = "4em";
  description.style.backgroundColor = "rgb(238, 238, 238)";
  description.style.color = "rgb(38, 38, 38)";
  description.style.fontFamily = "sans-serif";
  description.style.fontSize = "25px";
  description.style.borderBottom = "2px solid rgb(38, 38, 38)";
  article.style.backgroundColor = "rgb(238, 238, 238)";
  article.style.color = "rgb(38, 38, 38)";
  for (let i = 0; i < sections.length; i += 1) {
    sections[i].style.backgroundColor = "rgb(238, 238, 238)";
    sections[i].style.color = "rgb(38, 38, 38)";
  }
  for (let i = 0; i < paragraph.length; i += 1) {
    paragraph[i].style.backgroundColor = "rgb(238, 238, 238)";
    paragraph[i].style.color = "rgb(38, 38, 38)";
    paragraph[i].style.fontFamily = 'sans-serif';
    paragraph[i].style.fontSize = "25px";
  }
  footer.style.backgroundColor = "rgb(238, 238, 238)";
  link.style.backgroundColor = "rgb(238, 238, 238)";
  link.style.color = "rgb(38, 38, 38)";
  buttonDark.style.backgroundColor = "rgb(38, 38, 38)";
  buttonDark.style.color = "rgb(238, 238, 238)";
  buttonLight.style.backgroundColor = "rgb(38, 38, 38)";
  buttonLight.style.color = "rgb(238, 238, 238)";
  fairyButton.style.color = "rgb(238, 238, 238)";
  fairyButton.style.backgroundColor = "rgb(38, 38, 38)";
  localStorage.setItem('Mode', 'lightMode');
}

function fairyMode() {
  body.style.backgroundColor = "#ffb6c1";
  body.style.color = "rgb(66, 0, 66)";
  header.style.backgroundColor = "#ffb6c1";
  header.style.color = "rgb(66, 0, 66)";
  title.style.backgroundColor = "#ffb6c1";
  title.style.color = "rgb(66, 0, 66)";
  title.style.fontFamily = 'serif';
  title.style.fontSize = "4em";
  description.style.backgroundColor = "#ffb6c1";
  description.style.color = "rgb(66, 0, 66)";
  description.style.fontFamily = "serif";
  description.style.fontSize = "25px";
  description.style.borderBottom = "2px solid rgb(66, 0, 66)";
  article.style.backgroundColor = "#ffb6c1";
  article.style.color = "rgb(66, 0, 66)";
  for (let i = 0; i < sections.length; i += 1) {
    sections[i].style.backgroundColor = "#ffb6c1";
    sections[i].style.color = "rgb(66, 0, 66)";
  }
  for (let i = 0; i < paragraph.length; i += 1) {
    paragraph[i].style.backgroundColor = "#ffb6c1";
    paragraph[i].style.color = "rgb(66, 0, 66)";
    paragraph[i].style.fontFamily = 'serif';
    paragraph[i].style.fontSize = "25px";
  }
  footer.style.backgroundColor = "#ffb6c1";
  link.style.backgroundColor = "#ffb6c1";
  link.style.color = "rgb(66, 0, 66)";
  buttonDark.style.backgroundColor = "rgb(66, 0, 66)";
  buttonDark.style.color = "#ffb6c1";
  buttonLight.style.backgroundColor = "rgb(66, 0, 66)";
  buttonLight.style.color = "#ffb6c1";
  fairyButton.style.color = "#ffb6c1";
  fairyButton.style.backgroundColor = "rgb(66, 0, 66)";
  localStorage.setItem("Mode", "fairyMode");
}

function initialRenderization(){
  const screenMode = localStorage.getItem('Mode');
  if (screenMode === 'darkMode') {
    darkMode();
  } else if (screenMode === 'lightMode') {
    lightMode();
  } else if (screenMode === 'fairyMode') {
    fairyMode();
  }
}

window.onload = function(){
  initialRenderization();
}