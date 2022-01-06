const checkin = document.querySelector(".inputCheckin");
const checkout = document.querySelector(".inputCheckout");
const bedroom = document.querySelectorAll(".bedroom");
const select = document.querySelector(".nPeople");
const textArea = document.querySelector(".obs");
const btnSubmit = document.querySelector(".submit-btn");
const btnClear = document.querySelector(".clear-btn");
const ol = document.querySelector("ol");
const checkinDate = document.getElementById('check-in');
const checkoutDate = document.getElementById('check-out');
const btnGetReservation = document.querySelector('.my-reservation');

function getRoom() {
  for (let i = 0; i < bedroom.length; i++) {
    if (bedroom[i].checked) {
      return bedroom[i].value;
    }
  }
}

function getPeople() {
  return select.options[select.selectedIndex].value;
}

function getDate(value) {
  data = new Date(value);
  dataFormatada =
    (data.getDate() + 1) + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
  return dataFormatada;
}

const saveReservation = () => {
  const myReservation = ol.innerHTML;
  // const myReserve = [];
  // for (let i = 0; i < myReservation.length; i += 1){
  //   myReserve.push(myReservation[i].innerText);
  // }
  // const reservation = JSON.stringify(myReserve);
  localStorage.setItem("reservation", myReservation);
};

const newLi = () => {
  const myLi = document.createElement('li');
  myLi.innerHTML = `Reservation from day ${getDate(checkinDate.value)} until day ${getDate(checkoutDate.value)} Room ${getRoom()} - To ${getPeople()} People - Obs: ${textArea.value}.`
  ol.appendChild(myLi);
  saveReservation();
}

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  newLi();
})

window.onload = () => {
  if (localStorage.getItem('reservation')) {
    const myReservation = localStorage.getItem("reservation");
    // for (let i = 0; i < myReservation.length; i += 1) {
    //   const newLi = document.createElement('li');
    //   newLi.innerText = myReservation[i];
    //   ol.appendChild(newLi);
    // }
    ol.innerHTML = myReservation;
  }
}

btnClear.addEventListener('click', () => {
  ol.innerHTML = '';
  localStorage.removeItem('reservation');
})