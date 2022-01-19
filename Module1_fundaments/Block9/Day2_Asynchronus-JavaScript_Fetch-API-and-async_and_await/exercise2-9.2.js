const url = 'https://api.coincap.io/v2/assets';
const list = document.getElementById('coins');

const coins = [];

const createLi = () => {
  coins.forEach((item, i) => {
    if (i <= 10) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `${item.name} (${item.symbol}): ${item.price}`;
      list.appendChild(listItem);
    }
  });
};

const fetchAPI = async () => {
  const response = await fetch(url);
  const data = await response.json();
  data.data.forEach((item) => {
    coins.push({
      name: item.name,
      symbol: item.symbol,
      price: (parseFloat(item.priceUsd)).toFixed(2),
    });
  });
  createLi();
};

fetchAPI()
  .catch((error) => { list.innerHTML = error; });
