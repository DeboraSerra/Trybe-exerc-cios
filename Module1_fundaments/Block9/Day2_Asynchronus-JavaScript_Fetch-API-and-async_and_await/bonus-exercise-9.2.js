const url = 'https://api.coincap.io/v2/assets';
const url2 = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/brl.json';
const list = document.getElementById('coins');

const coins = [];
const coinsPrice = [];

const createLi = () => {
  coins.forEach((item, i) => {
    if (i <= 10) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `${item.name} (${item.symbol}): ${item.price}`;
      list.appendChild(listItem);
    }
  });
};

const changeCurrency = async () => {
  const response = await fetch(url2);
  const data = await response.json();
  coinsPrice.forEach((item, i) => {
    const priceUsd = item;
    const priceBrl = priceUsd * (parseFloat(data.brl)).toFixed(2);
    coins[i].price = (parseFloat(priceBrl)).toFixed(2);
  });
  createLi();
};

const fetchAPI = async () => {
  const response = await fetch(url);
  const data = await response.json();
  data.data.forEach((item) => {
    coins.push({
      name: item.name,
      symbol: item.symbol,
    });
    coinsPrice.push((parseFloat(item.priceUsd)).toFixed(2));
  });
  changeCurrency();
};

fetchAPI()
  .catch((error) => { list.innerHTML = error; });
