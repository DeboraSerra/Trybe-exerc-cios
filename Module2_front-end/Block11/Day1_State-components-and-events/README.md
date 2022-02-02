# Day 11.1 - State components and events

## Fixing exercises
### Introduction to events (Fancy-buttons.js)

1. Create a React app and create a component that has a button associated to an event that prints any text using `console.log()`.

2. Now change your component so it shows three buttons side by side with different texts. Each button must trigger a different event, writing a text in the browser cconsole using `console.log()`.

### Binding functions to classes with `this` and `bind` on `constructor` (Fancy-buttons-refactor.js)

3. Refactor the previous exercise with the functions inside the class.

4. Make sure your functions have access to the `this` object.

### Binding components with states and events (Fancy-button-refactor2.js)

Now, refactor your aplication so it counts the number of clicks on each button.

5. First define an inicial state to each button.

6. Then, when a button is clicked, change asynchronously the state of this button from 0 to 1.

7. At last, use the previous state to increase the count of clicks every time the button is clicked.

### In summary (Colored-button.js)

8. Define a logic to stablish that, when a number of clicks is even, it must be green.

9. The current color of the button must be printed with `console.log()` inside the function that handle the click.
