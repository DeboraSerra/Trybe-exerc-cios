# Project Playground functions

In this project we were ask to make functions following the requisits bellow. After passing the requisites we were oriented to refactor our work as we learn new things.

1. Create a function using the operator &&

> Implement a code to the function compareTrue that when it receives two boolean paramaters it must:

  > Return `true` if they're both true;
  > Return `false` if one or both are false.
  > Implemente the function using only one operator &&.

2. Create a function that calculates the area of a triangle

> Write a function with the name calArea that receives a value for the base and another to the height of a triangle and returns its area.

> Remember that the area of the triangle is calculate using the formula: (base * heigth) / 2.

3. Create a function that divide a frase

> Write a function with the name splitSentence, which will receive a string and return an array of strings separated foreach space in the original string.

> Exemple: if the function receive the string "go Trybe", the return must be ['go', 'Trybe'].

4 - Create a function that concatenate strings

> Write a function named concatName that, when it receives an array of strings, return a string with the format 'LAST ITEM, FIRST ITEM', regardless the size of the array.

5. Create a function that calculated a score on football

> Write a function named footballPoints that receive the number of wins and the number of ties and return the score the team made in a championship.

> Consider that each win score 3 points and each tie score 1 ponit.

6. Create a function that calculate the number of reps of the biggest number. Write a function called highestCount that, when it receives an array of numbers returns the number of times that the biggest one repeats.

7. Create a function of hunting the mouse

> Imagine there is two cats, called cat1 and cat2, and that both are hunting the same mouse. Imagin ethat the animals are in a straight line, each one in a position represented by a number.

> Knowing this, createa function called catAndMouse that, when it receives the position of mouse, cat1 and cat2, on that order, calculate the distances between the mouse and each of the cats and then returns which of the cats will catch the mouse first (the one that is closer to the mouse).

> I case the cats are at the same distance of the mouse, the function must return the string "os gatos trombam e o rato foge" (The cats bump and the mouse gets away).

8. Create a function FizzBuzz

> Create a function called fizzBuzz that receive an array of numbers and return an array as the exemple below:

  > For each number of the array that is divisible just by 3, show a string 'fizz';
  > For each number of the array that is divisible by 5, show a string 'buzz';
  > In case the number is divisible by 3 and 5, show a string 'fizzBuzz';
  > In case the number isn't divisible by 3 or by 5, show a string 'bug!';

9. Createa function the code and decode

> Create two functions: the first must be called encode and, when it receives a string as paramater, must change all the lower case vowels for numbers using the following format:

  > a -> 1
  > e -> 2
  > i -> 3
  > o -> 4
  > u -> 5

> The second function must be called decode and do the opposite of the encode function, which means, receive a string containing numbers in the place of lower case letters and return a string with lower case vowels in the place of the numbers.

10. Create a function of Technologies' List

> Create a function that receive an array of technology names That you want to learn. This function must receive a second parameter called name.

> For each technology in the array, create an object with the following structure:

{
  tech: "NomeTech",
  name: name
}

> The return of your function must be a list of objects ordered by the tech name um the format showed before.

> If the array is empty the function must return 'Vazio!' ('Empty!').

#### Bonus

11. Create a function of Phone Numbers

> Create a function called generatePhoneNumber that receive an array with 11 numbers and return a phone number, respecting the parenthesis, dashes and spaces.

> Exemple: in case the parameter is [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], generatePhoneNumber must return (12) 34567-8901.

> If the function receive an array with a size different than 11, it must return "Array com tamanho incorreto." ('Array with incorrect length).

> If any of the numbers of the array is smaller than 0, bigger than 9 or repeat 3 or more times, it must return the string "não é possível gerar um número de telefone com esses valores" ('it's not possible to generate a phone number with tese values').

12. Create a function with the conditions to create a triangle

> A triangle is made with three lines: lineA, lineB and lineC. Create a function called triangleCheck that must receive three lines ans parameters and return if it is possible to make a triangle with the values of each line.

  > To make a triangle, the size of any of the sides of the triangle must be smaller then the sum of the other two and bigger then the absolute value of the subtraction between them.

> The return of the function must be aboolean.

13. Create wellcome function to the Trybe's Bar!

> According to the rules of this bar, for each drink the costumers must drink a cup of water so they won't have hangover.

> Create the function called hydrate that receive a string and return the sugestion of how many cups of water the costumer must drink. Exemples:

  > Received string:
    > "1 beer"
  > Returned string:
    > "1 cup of waters"
  > Received string:
    > "1 liquor, 5 beers and 1 glass of wine"
  > Returned string:
    > "7 cups of water"
