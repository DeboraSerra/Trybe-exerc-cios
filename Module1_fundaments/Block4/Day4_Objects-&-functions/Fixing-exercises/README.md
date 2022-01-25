# Day 4-4 - Fixing exercises - JavaScript - Objects & functions

### Objects (fixingExercise1-4.4.js)

1 - Create an object _player_ containing the variables listed below:

```
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
```

2 - Access the keys `name`, `lastName` and `age` and concatenate its informations to print in the console a message like: "A jogadora Marta Silva tem 34 anos de idade".

3 - Add to the object the key `bestInTheWorld` and assign to this key an array containing the dates when the player Marta was considered the best in the world.

```
[2006, 2007, 2008, 2009, 2010, 2018]
```

4 - Access the key `bestInTheWorld` and make a `console.log` in the following format: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

5 - Access the key `medals` and use `console.log` in the following format: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

### For/in (fixingExercise2-4.4.js)

1 - Using the object below, use `For/in` and print in the console the message: 'Olá xxxxx' for each name, changing the xxxxx to the name in question.

```
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};
```

###### (fixingExercise3-4.4.js)
2 - Using the object below, use `For/in` and print in the console of the keys and its values.

```
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
```

### Functions (fixingExercise4-4.4.js)

Take each of the exercises 1 to 5 from day 4.1 and make so they are functions in one file. The variables that you created in each of them must be removed and turned into parameters of the functions.
After refactoring your code, check if it still works as specified.