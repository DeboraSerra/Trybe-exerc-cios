const loginEmail = document.querySelector("#e-mail");
const loginPassword = document.querySelector("#password");
const loginButton = document.querySelector(".btn-submit");
const submitButton = document.querySelector('#submit-btn');
const agree = document.querySelector('#agreement');
const textArea = document.querySelector('#textArea');
const counter = document.querySelector('#counter');
const form = document.querySelector('#evaluation-form');
const select = document.querySelector('#house');
const sandwichIcon = document.querySelector('.icon');
const loginInput = document.querySelector(".trybewarts-login");

sandwichIcon.addEventListener('click', () => loginInput.classList.toggle('login-active'));

const checkLogIn = () => {
  (loginEmail.value === "tryber@teste.com" && loginPassword.value === "123456") ? 
    alert("Hi, Tryber!") :
    alert("Wrong e-mail or password");
}

loginButton.addEventListener("click", checkLogIn);

const checkAgreement = () => {
  (agree.checked) ? submitButton.removeAttribute('disabled') : submitButton.setAttribute('disabled', 'disabled');
}

agree.addEventListener('click', checkAgreement);

const countDown = () => {
  const characters = textArea.value.length;
  let myCounter = 500;
  (textArea.value.length !== 0) ? counter.innerHTML = myCounter - characters : counter.innerHTML = 500;
}

textArea.addEventListener('keyup', countDown);

const formContent = document.createElement('section');

const createFullName = () => {
  const name = document.querySelector("#input-name");
  const lastName = document.querySelector("#last-name");
  const fullName = document.createElement('p');
  fullName.innerText = `Nome: ${name.value} ${lastName.value}`;
  formContent.appendChild(fullName);
  return true;
}

const createEmail = () => {
  const email = document.querySelector("#input-email");
  const myEmail = document.createElement('p');
  myEmail.innerText = `Email: ${email.value}`;
  formContent.appendChild(myEmail);
  return true;
}

const createHouse = () => {
  const selectedHouse = select.options[select.selectedIndex];
  const house = document.createElement('p');
  house.innerText = `Casa: ${selectedHouse.value}`;
  formContent.appendChild(house);
  return true;
}

const createFamily = () => {
  const selectedFamily = document.querySelector('input[name=family]:checked');
  const family = document.createElement('p');
  family.innerText = `Família: ${selectedFamily.value}`;
  formContent.appendChild(family);
  return true;
}

const createSubjects = () => {
  const selectedSubjects = document.querySelectorAll(".subject:checked");
  const subjects = [];
  selectedSubjects.forEach((item) => subjects.push(item.value));
  const mySubjects = document.createElement('p');
  mySubjects.innerText = `Matérias: ${subjects.join(', ')}`;
  formContent.appendChild(mySubjects);
  return true;
}

const createRating = () => {
  const selectedRate = document.querySelector('input[name=rate]:checked');
  const rate = document.createElement('p');
  rate.innerText = `Avaliação: ${selectedRate.value}`;
  formContent.appendChild(rate);
  return true;
}

const createComment = () => {
  const myComment = document.createElement('p');
  myComment.innerHTML = `Observações: ${textArea.value}`;
  formContent.appendChild(myComment);
  return true;
}

const submit = (e) => {
  e.preventDefault();
  createFullName();
  createEmail();
  createHouse();
  createFamily();
  createSubjects();
  createRating();
  createComment();
  form.innerHTML = '';
  form.appendChild(formContent);
}


submitButton.addEventListener('click', submit);
