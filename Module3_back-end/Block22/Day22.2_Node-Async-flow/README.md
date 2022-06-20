# Day 22.2 - Node.js - Async flow

To run any the code from the exercises type on your terminal `node <Day22.2_exerciseX.js>`.

1. Day22.2_exercise1-2.js - The function will receive a random number between 1 and 100 and return a Promise that will be rejected if the result of the calculation is smaller than 50 or will be resolved with the result if it is bigger.
2. Day22.2_exercise3.js - The same as the previous file, but it uses `async/await` instead of `then`.
3. Day22.2_exercise4.js - The function will read the file `simpsons.json` and:
   * return all the characters,
   * the character for an informed id,
   * remove the characters with id 10 and 6,
   * write the file simpsonFamily.json with the characters 1 to 4,
   * Add the character 'Nelson Muntz' to the file 'simpsonFamily.json',
   * Replace the character 'Nelson Muntz' with 'Meggie Simpson'.
4. Day22.2_exercise5.js - The code will
   * Create 5 files with the content being each item of the array: `['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']` and the name of each file file will be 'file<index + 1>.txt'.
   * Then will read the content of each file and store it in a file called 'fileAll.txt'.
5. Day22.2_exercise6.js - The code will ask the user what file they want to read and show it in the terminal.
6. Day22.2_exercise7.js - The code will ask the user for a file, a word to be replaced, a new word to replace and a name for the file to save the alterations and then will read the content of the original file, replace the word chosen and save the new phrase.
7. Day22.2_exercise8.js - The code will receive a random number and return:
   * A promise with 'Fizz', if it is divisible by 3,
   * A promise with 'Buzz', if it is divisible by 5,
   * A promise with 'FizzBuzz', if it is divisible by 3 and 5
   * Reject the Promise with the number if it isn't divisible by 3 nor 5.

