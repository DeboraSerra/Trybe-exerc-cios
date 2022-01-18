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
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.data.forEach((item) => {
        coins.push({
          name: item.name,
          symbol: item.symbol,
          price: (parseFloat(item.priceUsd)).toFixed(2),
        });
      });
    })
    .catch((error) => { list.innerHTML = error; });
  createLi();
};

window.onload = () => {
  fetchAPI();
};
