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

function checkDate() {
  let date = startDate.value;
  let day = date[0] + date[1];
  let month = date[3] + date[4];
  let year = date[6] + date[7] + date[8] + date[9];
  if (!date) {
    alert('Date is required')
    return false;
  }
  if (parseInt(day) <= 0 || parseInt(day) > 31) {
    alert('Invalid date');
    return false
  } else if (parseInt(month) <= 0 || parseInt(month) > 12) {
    alert("Invalid date");
    return false;
  } else if (parseInt(year) <= 0) {
    alert("Invalid date");
    return false;
  } else {
    return `${parseInt(day)}/${parseInt(month)}/${parseInt(year)}`;
  }
}

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
  createP8.innerHTML = `<strong>Started: </strong>${checkDate()}`;
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

const validateName = () => {
  const name = document.querySelector("#fullName");
  if (!name.value) {
    alert("Name is required");
    return false;
  }
  if (name.value.length > 40) {
    alert("Max of 40 characters");
    return false;
  }
  return true;
};

function validateEmail() {
  const email = document.querySelector('#e-mail');
  if (!email.value) {
    alert('E-mail is required');
    return false;
  }
  if (email.value.length > 50) {
    alert('Max 50 characters');
    return false;
  }
  return true;
}

function validateSocial() {
  const socialSecurityNumber = document.querySelector('#cpf');
  if (!socialSecurityNumber.value) {
    alert('Social Security Number is required');
    return false;
  }
  if (socialSecurityNumber.value.length < 11 || socialSecurityNumber.value.length > 11) {
    alert('invalid number');
    return false;
  }
  return true;
}

function validateAdress() {
  const adress = document.querySelector('#adress');
  if (!adress.value) {
    alert('Adress is required');
    return false;
  }
  if (adress.value.length > 200) {
    alert('Max 200 characters');
    return false;
  }
}

function validateCity() {
  const city = document.querySelector('#city');
  if (!city.value) {
    alert('City is required');
    return false;
  }
  if (city.value.length > 28) {
    alert('Max 28 characters');
    return false;
  }
  return true;
}

function validateResume() {
  const resume = document.querySelector('#presentation');
  if (!resume.value) {
    alert('Introduction to your resume is required');
    return false;
  }
  if (resume.value.length > 1000) {
    alert('Max 1000 characters');
    return false;
  }
  return true;
}

function validatePosition() {
  const position = document.querySelector('#job1');
  if (!position.value) {
    alert("Position is required");
    return false;
  }
  if (position.value.length > 40) {
    alert('Max 40 characters');
    return false;
  }
  return true;
}

function validateDescription() {
  const description = document.querySelector('#job1-description');
  if (!description.value) {
    alert("Job description is required");
    return false;
  }
  if (description.value.length > 500) {
    alert("Max 500 characters");
    return false;
  }
  return true;
}

function validateJob(validation) {
  let valid = validation;
  if (validateResume() === false) {
    valid = false;
  }
  if (validatePosition() === false) {
    valid = false;
  }
  if (validateDescription() === false) {
    valid = false;
  }
  if (checkDate() === false) {
    valid = false;
  }
  if (valid === true) {
    submitForm();
  }
}

function validatePersonalInfo(event) {
  event.preventDefault();
  const resume = document.querySelector("#my-resume");
  resume.innerHTML = "";
  let validation = true;
  if (validateName() === false) {
    validation = false;
  }
  if (validateEmail() === false) {
    validation = false;
  }
  if (validateSocial() === false) {
    validation = false;
  }
  if (validateAdress() === false) {
    validation = false;
  }
  if (validateCity() === false) {
    validation = false
  }
  validateJob(validation);
}

function submitForm() {
  createHeader();
  createPersonalInfo();
  createSecHeader();
  createPreviousJob();
}

submitButton.addEventListener('click', validatePersonalInfo);

function clearAll() {
  const resume = document.querySelector("#my-resume");
  resume.innerHTML = "";
}

clearButton.addEventListener('click', clearAll)