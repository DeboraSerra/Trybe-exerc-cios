const API_URL = 'https://icanhazdadjoke.com/';
const jokeContainer = document.querySelector('#jokeContainer');

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };
  const joke = await fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => { jokeContainer.innerHTML = data.joke; })
    .catch((error) => console.log(error));

};

console.log('joke', fetchJoke());
window.onload = () => showJoke();
