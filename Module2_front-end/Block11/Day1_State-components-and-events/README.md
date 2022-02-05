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

## Pokedex

Using the Pokedex files produced on Block 10.2, do the following exercises:

1. Change the page so it shows one Pokémon at a time. When you click the button `Next Pokémon` the page shows the next one on lthe list. When it gets to the last pokémon of the list, the pokedex must go back to the first when the button is clicked.

2. Your Pokedex must have two buttons containing the types `Fire` and `Psychic`. When one of the buttons is selected, the pokedex must go through the pokemons of that type. When the page is loaded, one of this filters must be selected.

#### Bonus

1. Divide the css style by component, making one .css file for each one.

2. Your pokedex must have a third button called All to reset the filter. After click, the pokedex must go back to all the pokemons. When the page is loaded, the selected button must be `All`.

3. Create a button component and use it to make the buttons reusable.

4. Make the filter buttons dinamic: your pokedex must generate a button to each type of pokemon available, without repeat any type. The button All must be maintained.

5. Make the button `Next pokemon` be disabled if the fildered list have only one pokemon.