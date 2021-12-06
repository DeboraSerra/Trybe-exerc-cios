function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

//Exercise 1
let daysParent = document.querySelector("#days");

function createDays() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  for (let i = 0; i < dezDaysList.length; i += 1){
    let day = dezDaysList[i];
    let dayItemList = document.createElement('li');
    dayItemList.innerHTML = day;
    daysParent.appendChild(dayItemList);
  }
  
}
createDays();

let daysList = document.querySelectorAll('#days li');
for (let i = 0; i < daysList.length; i += 1) {
  if (daysList[i].innerText === '25') {
    daysList[i].className = 'holiday';
  }
}

//Exercise 2
let buttonsParent = document.querySelector(".buttons-container");

function addHolidays(string) {
  let holidayButton = document.createElement("button");
  holidayButton.innerHTML = string;
  holidayButton.setAttribute("id", "btn-holiday");
  buttonsParent.appendChild(holidayButton);
}
addHolidays('Feriados');

//Exercise 3
let holidayButton = document.querySelector("#btn-holiday");
holidayButton.addEventListener("click", changeHolidayColor);

function changeHolidayColor() {
  let holidays = document.querySelector('.holiday');
  if (holidays.style.backgroundColor !== 'green') {
    holidays.style.backgroundColor = 'green';
  } else if (holidays.style.backgroundColor === 'green') {
    holidays.style.backgroundColor = "rgb(238, 238, 238)";
  }
}

//Exercise 4
function itsFriday(string) {
  let fridayButton = document.createElement('button');
  fridayButton.innerHTML = string;
  buttonsParent.appendChild(fridayButton);
}

itsFriday('Sexta-feira');



