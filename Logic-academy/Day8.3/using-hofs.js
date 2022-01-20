const techProducts = [
  {
      id: 1, // numérico
      name: 'computer', // string
      price: 2100, // number
  },
  {
      id: 2,
      name: 'mouse',
      price: 56,
  },
  {
      id: 3,
      name: 'monitor',
      price: 589,
  },
  {
      id: 4,
      name: 'keyboard',
      price: 78,
  },
  {
      id: 5,
      name: 'HD',
      price: 350,
  },
  {
      id: 6,
      name: 'webcam',
      price: 187,
  },
  {
      id: 7,
      name: 'mic',
      price: 69,
  },
  {
      id: 8,
      name: 'headset',
      price: 216,
  },
];
/*
* 1 - // Create an algorithm that return an array with the name of all the products that have even ids;
* 2 - // Create an algorithm that return true if any of the products have the price bigger than 300 and false otherwise;
* 3 - // Create an algorithm that receive the id of a product and an amount and return the total price
// ex: id: 8 and amount: 2 total price: 432
*/

//1
const evenIdProducts = (arr) => {
  const productsNames = [];
  arr.forEach((item) => item.id % 2 === 0 ? productsNames.push(item.name) : '');
  return productsNames;
};

console.log(evenIdProducts(techProducts));

//2
const priceBiggerThan300 = (arr) => arr.some((item) => item.price > 300);
console.log(priceBiggerThan300(techProducts));

//3
const finalPrice = (id, amount) => {
  const product = techProducts.find((item) => item.id === id);
  return `id: ${id}, amount: ${amount}, total price: ${product.price * amount}`;
} 

console.log(finalPrice(8, 2));
