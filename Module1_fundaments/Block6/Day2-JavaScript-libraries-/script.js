const state = document.querySelector('#state');
const startDate = document.querySelector('#start-date');
const submitButton = document.querySelector('#submit-button');
const resume = document.querySelector('#my-resume');
const clearButton = document.querySelector('#clear-button');

const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocntins', 'Distrito Federal'];

const values = ['ac', 'al', 'ap', 'am', 'ba', 'ce', 'es', 'go', 'ma', 'mt', 'ms', 'mg', 'pa', 'pb', 'pr', 'pe', 'pi', 'rj', 'rn', 'rs', 'ro', 'rr', 'sc', 'sp', 'se', 'to', 'df'];

function createStateOptions() {
  for (let i = 0; i < states.length; i += 1) {
    let createOption = document.createElement('option');
    let text = states[i];
    let myValue = values[i];
    createOption.innerText = text;
    createOption.value = myValue;
    state.appendChild(createOption);
  }
}

createStateOptions();

function createHeader() {
  let text = 'Personal information:'
  let createTag = document.createElement('h1');
  createTag.innerText = text;
  resume.appendChild(createTag);
}

function nameParagraph() {
  let fullName = document.querySelector("#fullName").value;
  let createP1 = document.createElement("p");
  createP1.innerHTML = `<strong>Full name: </strong>${fullName}`;
  resume.appendChild(createP1);
}

function emailParagraph() {
  let email = document.querySelector("#e-mail").value;
  let createP2 = document.createElement("p");
  createP2.innerHTML = `<strong>E-mail: </strong>${email}`;
  resume.appendChild(createP2);
}

function socialSecurityParagraph() {
  let socialSecurityNumber = document.querySelector("#cpf").value;
  let createP3 = document.createElement("p");
  createP3.innerHtml = `<strong>Social security number: </strong>${socialSecurityNumber}`;
  resume.appendChild(createP3);
}

function adressParagraph() {
  let adress = document.querySelector("#adress").value;
  let city = document.querySelector("#city").value;
  let stateChosen = document.querySelector("#state").value;
  let housingOption = document.querySelector("input[name='housing-type']:checked").value;
  let createP4 = document.createElement("p");
  createP4.innerHTML = `<strong>Adress: </strong>${adress}, ${housingOption} - ${city}/${stateChosen}`;
  resume.appendChild(createP4);
}
function createPersonalInfo() {
  nameParagraph();
  emailParagraph();
  socialSecurityParagraph();
  adressParagraph();
}

const picker = new Pikaday({ field: document.getElementById("start-date") });

function createIntro() {
  let intro = document.querySelector('#presentation').value;
  let createP5 = document.createElement('p');
  createP5.innerHTML = `<strong>Presentation: </strong>${intro}`;
  resume.appendChild(createP5);
}

function createPosition() {
  let position = document.querySelector('#job1').value;
  let createP6 = document.createElement('p');
  createP6.innerHTML = `<strong>Position: </strong>${position}`;
  resume.appendChild(createP6);
}

function createJobDesciption() {
  let description = document.querySelector('#job1-description').value;
  let createP7 = document.createElement('p');
  createP7.innerHTML = `<strong>Job description: </strong>${description}`;
  resume.appendChild(createP7);
}

function createStartingDate() {
  let createP8 = document.createElement('p');
  createP8.innerHTML = `<strong>Started: </strong>${startDate.value}`;
  resume.appendChild(createP8);
}

function createSecHeader() {
  let createHeader2 = document.createElement("h2");
  let header2Text = "Previous jobs";
  createHeader2.innerText = header2Text;
  resume.appendChild(createHeader2);
}

function createPreviousJob() {
  createIntro();
  createPosition();
  createJobDesciption();
  createStartingDate();
}

function submitForm(event) {
  event.preventDefault();
  createHeader();
  createPersonalInfo();
  createSecHeader();
  createPreviousJob();
}

submitButton.addEventListener('click', submitForm);

function clearAll() {
  const paragraphs = document.querySelectorAll('p');
  for (let i = 0; i < paragraphs.length; i += 1) {
    resume.removeChild(paragraphs[i]);
  }
  const header = document.querySelector('h1');
  resume.removeChild(header);
  const secHeader = document.querySelector('h2');
  resume.removeChild(secHeader);
}

clearButton.addEventListener('click', clearAll)

const validate = new window.JustValidate("#form");

validate.addField('#fullName', [
  {
    rule: 'maxLength',
    value: 40,
  },
  {
    rule: 'required',
    errorMessage: 'Name is required',
  }
]);

validate.addField('#e-mail', [
  {
    rule: 'required',
    errorMessage: 'E-mail is required',
  },
  {
    rule: 'email',
    errorMessage: 'E-mail is invalid',
  }
])