# Day15.2 - Itroduction to Redux - the global state of the application

## Exercise 1

Using the starting code privided:
1. Create a store to the application.

2. Create a reducer with a switch returning the state of the application.

3. Increment the switch with the actions `NEXT_COLOR` and `PREVIOUS_COLOR` that change the index stored in the `INITIAL_STATE`.
  
4. Create an `eventListener` to the buttons _Previous color_ and _Next color_ and do a dispatch with the specific typpe to each.

5. Doa subscribe of the store, changing the `innerHTML` of the tag with the id `value` to the current color and the style of the element with the id `container`.

6. Create a button with the text _Random color_, an `eventListener` and an action adding a random color to the `colors` array. Do so it's shown when it is created

## Execercise 2

Using the code provided:
1. Combine the existing reducers with the function `combineReducers` and sve it in a constant.

2. Create a store with the combined reducers.

3. Create actions that change the name and last name in the initial state.

4. Create `dispatches` t change the name a few seconds after the page is loaded.

5. Add a `store.subscribe()` to update the page informations accordingly to what is saved in store.

## Bonus 1

Do the 13 exercises proposed on `freecodecamp`.

## Bonus 2

Increment the code made in the live lecture:

* Do a field that receive a value and this value will be aplied to the button _increment_.

* Do a field that receive a value and this value will be aplied to the button _decrement_.

* Save another value in state called `clickCount`. this field will count the number of times the button on screen was clicked.

* Save an array on state that store the value added on each click in any of the buttons.
* 