const costPrice = 15;
const salePrice = 30;

let totalCost = costPrice + (costPrice * 20) / 100;

if (costPrice < 0 || salePrice < 0) {
  console.log("Erro");
} else {
  console.log(salePrice - totalCost);
}