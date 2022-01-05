const button = document.querySelector('button');
let counter = document.querySelector('span');

button.addEventListener("click", (e) => {
  let count = parseInt(counter.innerText);
  e.target ? (count += 1, counter.innerText = count) : stop = true;
});