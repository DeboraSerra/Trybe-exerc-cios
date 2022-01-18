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
  await fetch(url2)
    .then((response) => response.json())
    .then((data) => {
      coinsPrice.forEach((item, i) => {
        const priceUsd = item;
        const priceBrl = priceUsd * (parseFloat(data.brl)).toFixed(2);
        coins[i].price = (parseFloat(priceBrl)).toFixed(2);
      });
    })
    .catch((error) => { list.innerHTML = error; });

  createLi();
};

const fetchAPI = async () => {
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.data.forEach((item) => {
        coins.push({
          name: item.name,
          symbol: item.symbol,
        });
        coinsPrice.push((parseFloat(item.priceUsd)).toFixed(2));
      });
    })
    .catch((error) => { list.innerHTML = error; });
  changeCurrency();
};

window.onload = () => {
  fetchAPI();
};
