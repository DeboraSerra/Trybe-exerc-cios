# Day 8.1 - JavaScript ES6 - Introdução a Higher Order Functions

###### (exercise1-8.1.js)

1. Create a function that return an object in the format { fullName, email } representing a new employee. Use this function as parameter in the HOF newEmployees to create each hired person and theis id. Your function must receive as parameter the fullName of the employee an from it, create automatically an email with the format persons's_name@trybe.com.

###### (exercise2-8.1.js)

2. Create a HOF that returns the result of a riffle. This HOF must generate a random number from 1 to 5, receiving as parameter the bet and a function that check if the bet is equal to the sorted number. The return of your HOF must be a string (Ex: "Try again" or "Congratulations! You win!!").

###### (exercise3-8.1.js)

3. Create a HOF that will receive three parameters. The first will be an array of correct answers, the second will be the answers to verified and the third is a function that checks if the answers are correct and count the score of the student. At the end, the HOF must return the score.

> When the answer is correct the score increase by 1 point, if it is incorrect the score decrease by 0.5 point, if there is no answer ('N.A.') the score does not change.

### BONUS

#### Parte I - Game Actions Simulator (bonus-exercise1-8.1.js)

Implement a HOFs that simulate shift in a RPG game.

1. Create a function that return the damage of the dragon.

> It must be a random number between 15 (min damage) and the value of the attribute strength (max damage).

2. Create a function that returns the damage caused by the warrior.

> The damage wil be a random number between the value of the attribute strength (min damage) and the value of the strength * weaponDmg (max damage).

3. Create a function that returns an object with two keys and two values containing the damage and the mana spent by the mage in one shift.

> The damage must be a random number between the attribute intelligence (max damage) and the value of intelligence * 2 (max damage).

> The consumed mana by shift is 15. Beside it, the function must have a conditional, if the mage have less then 15 of mana the value of damage must be a message (Ex: "Not enough mana") and the mana spent is 0.

#### Part II (bonus-exercise2-8.1.js)

Using the functions created in the previous exercise, use them as parameters to the other functions that will compose the gameActions object.

1. Create the first HOF of the gameActions object. It must be a function that simulates the shift of the warrior character. This HOF must receive as parameter the function that calculates the damage caused by the warrior and update the healthPoints of the dragon. Besides, it must also update the value of the damage key of the warrior.

2. Create a second HOF that composes the object. It must receive a function that simulates the shift of the character mage. This HOF must receive as parameter the function that calculates the damage caused by the mage, update the healthPoints of the dragon and update the keys damage and mana of the mage.

3. Create a third HOF to the object. It will simulate the shift of the dragon. This HOF must receive as parameter the function that calculate the damage caused by the dragon, update the healthPoints of the warrior and the mage and update the value of the damage key of the dragon.

4. Add to the object a function that returns the object battleMembers updated and use console.log to see the final result of the shift.
