
const fetchApi = () => {
  const dogUrl = fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((data) => data.message);
  return  dogUrl;
}

// const renderDog = async () => {
//   const dogSect = document.querySelector('.dog-sect');
//   const img = document.createElement('img');
//   const url = await fetchApi();
//   const breed = url.split('/')[4];
//   img.src = url;
//   img.alt = breed;
//   dogSect.appendChild(img);
// }

// renderDog();

module.exports = { fetchApi };
