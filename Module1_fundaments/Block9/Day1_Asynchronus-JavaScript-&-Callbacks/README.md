# Day 9.1 - Asynchronus JavaScript and callbacks

1. Using the given function, modify it so Mars can be printed asynchronusly, after 4 seconds.

2. Suposing you need to simulate a message sent by the robot _Curiosity_ from Mars to Earth. The _Curiosity_ send to Earth the current temperature in Mars, spending a variable time up to 5 seconds to finish sending. Create the function `sendMarsTemperature`, that print Mars temperature.

3. Now, suposing you can can send to the robot what you want to do, once you get Mars temperature. So, add to the function `sendMarsTemperature` a callback that have the actions to be done with the temperature.

4. At least, the robot has a success rate of sending message of 60% due to the fact that the robot if already busy with otherr operations. So, add to the function `sendMarsTemperature` another callback that contain the actions in case of failure.

5. Write a test the check the calling of the uppercase callback function, that transform the letters of a word in uppercase. Remember to be aware of a false positive in asynchronus tests.

6. Suposing there are three pokémons available: Bulbasaur, Charmander and Squirtle. Complete the calling of the function `getPokemonDetails` in a way that it prints on the console the details of the ppokémon you picked. PS: Don't forget to handle the possible errors in case the pokémon does not exist in the database.

7. Create a .test.js or .spec.js with the code provides. COmplete the tests to the function `getPokemonDetails` acconding to the specifications.
