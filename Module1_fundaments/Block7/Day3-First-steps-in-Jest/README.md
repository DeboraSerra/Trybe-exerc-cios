# Day 7.3 - First step in Jest

You will implement tests in different contexts using the functions given on the course. Separate the functions and the tests in different files to avoid any trouble.

###### (sum.js, sum.test.js)

1. The function sum(a, b) return the sum of the parameters a and b.

>* Test if the return of sum(4, 5) is 9;
>* Test if the return of sum(0, 0) is 0;
>* Test if the function sum throws an error when the parameters are 4 and '5' (string 5);
>* Test if the error message is "parameters must be numbers" when calling sum(4, "5").

###### (myRemove.js, myRemove.test.js)

2. The function myRemove(arr, item) receive an array `arr` and return a copy of this element without the item if it exists in the array.

>* Test if myRemove([1, 2, 3, 4], 3) returns the expected array;
>* Test if myRemove([1, 2, 3, 4], 3) doesn't return the array [1, 2, 3, 4];
>* Test if myRemove([1, 2, 3, 4], 5) returns the expected array.

###### (myFizzBuzz.js, myFizzBuzz.test.js)

3. The function myFizzBuzz(num) receives a number `num` and returns "fizzbuzz" if the number is divisible by 3 and by 5, "fizz" if it's divisible only by 3, "buzz" if it's divisible only by 5, the number if it isn't divisible by 3 or by 5 and false in case `num` isn't a number.

>* Test if calling the function with a number divisible by 3 and by 5 returns the expected result;
>* Test if calling the function with a number divisible only by 3 returns the expected result;
>* Test if calling the function with a number divisible only by 5 returns the expected result;
>* Test if calling the function with a number that isn't divisible by 3 and by 5 returns the expected result;
>* Test if calling the function with an argument that isn't a number, it returns the expected result;

###### (encode-decode.js, encode-decode.test.js)

4.To the functions encode and decode create the following Jest tests:

>* Test if encode and decode are functions;
>* To the encode function test if the vowels a, e, i, o and u are converted to 1, 2, 3, 4 and 5, respectively;
>* To the decode function, test if the numbers 1, 2, 3, 4 and 5 are converted to the vowels a, e, i, o, u , respectively;
>* Teste se as demais letras/números não são convertidos para cada caso;
>* Test if the returned string has the same number of characters as the string passed as the argument.

###### (techList.js, techList.test.js)

5. The function techList receive as parameters an array containing a list of tecnologies and a string with a name. For each tecnology in the array, the function creates, alphabeticaly, an object with the following structure:
```
{
  tech: 'nomeTecnologia',
  name: name,
}
```
>Implement the tests to check the behavior of this function.

###### (hydrate.js, hydrate.test.js)

6. The function hydrate receivea string with the format 'number drink', and return a sugestion of how many cuos of water you should drink. For each drink, you should drink a cup of water.

>Implement the tests to check the behavior of this function.

#### BONUS (id-check.js, id-check.test.js)

1. Create a function that receive two paramaters: employee's id and the available detail about him/her (firstName , lastName , specialities). 
* Start creating the tests to this function.

> Your function must return the result of the search for the detail and id of the employee. 

> If the id isn't in the employee list, your function must return the error "Unidentified ID".

> If the detail you want to check doesn't exist, the function must return the error "Information unavailable".

> Start implementing the test to check what you want the function to do, then implemat just enough so the function will pass. Repeat until all you want the function to do is implemented.
