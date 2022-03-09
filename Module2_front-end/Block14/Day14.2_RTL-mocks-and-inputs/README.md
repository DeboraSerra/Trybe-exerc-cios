# Day 14.2 - RTL - mocks and inputs


##### (/exercises-14.2-part1)

The first part of the exercises were developed accordingly to the guidelines below:

1. Create a function that generate a random number.
* Develop the tests to that function using mocks.

2. Using the function created before, create a new implementation to occur only one time using mocks so it will receive two parameters and return the division.
* Implement the test to this function too.

3. Use the same function of the first exercise and implement a mock that receives 3 parameters and return their multiplication. Then reset the mock and implement one that receive one parameter and return it multiplied by two.
* Implement the tests.

4. Create three functions: the first must receive a string and return it to upper case, the second receives a string and return the first letter and the third receive two string and concatenate them.
* A: Do the mocks of the functions like so:
* 1. Implement a mock to the first function so it returns the string in lower case;
* 2. Implement a mock to the second function so it returns the last letter;
* 3. Implement a mock to the third function so it receives three string instead of two.

* B: Implement the tests to see if the mock are working;
* C: After creating the tests, restores the mocks and test it to make sure the mocks were cleared.

5. Create a function that make a requisition for the given api;
* Mock the fetch and create two tests: one receiving 'request success' and the other 'request failed'.


##### (/exercises14.2-part2)

In part2 of the exercises we were asked to develop the tests to a react application provided to us.
