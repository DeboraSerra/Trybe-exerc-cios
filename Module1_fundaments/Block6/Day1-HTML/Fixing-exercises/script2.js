// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function preventLink(e) {
  e.preventDefault();
}

HREF_LINK.addEventListener('click', preventLink);

function preventCheck(e) {
  e.preventDefault();
}

INPUT_CHECKBOX.addEventListener('click', preventCheck);

function preventText(e) {
  if (e.key !== 'a') {
    e.preventDefault();
  }
}

INPUT_TEXT.addEventListener('keypress', preventText);