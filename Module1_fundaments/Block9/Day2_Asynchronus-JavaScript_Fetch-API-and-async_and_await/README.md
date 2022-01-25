# Day 9.2 - Asynchronous JavaScript - Feth API and async/await

###### (exercise1-9.2.js, exercise1-9.2.html)

1. Using the html and the js codes provided in the course, do a requisition using fetch and `https://icanhazdadjoke.com/` and the object below as arguments.

```
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};
```

* Using `.then`, check the response structure using `console.log`.

* Replace the `console.log` with the `.json()` method and print the requisition data.

* From that response, make the joke apear on the page.

###### (exercise2-9.2.js, exercise2-9.2.html)

2. Using the link provided in the course, create a js file, and write a function to capture the array with the crypto coins. Create an html file with a tag to list the crypto coins.

* Make the coins apear on the page in the following format: Coin's name (coin's symbol): Value in dolar. Ex: Bitcoin (BTC): 46785.06.

* Use a HOF to filter the first 10 coins.

### Bonus (bonus-exercise-9.2.html, bonus-exercise-9.2.js)

Use an API to convert the value of the crypto coins used before to the local coin (Real).

* To this exercise, use the Currency API.
