# Day 10.2 - React components

### Fixing exercises

#### Props (./fixing-execises-10.2/src/Image.js)

Inside a React app, create an Image.js file in the src directory and copy the given code. After that answer:

1. What is the name of the component?
>> A: The components name is Image.

2. Call the Image component in a way that shows the image given or the text _Cute cat staring_, in case the image can't be loaded.

#### Components composition (Order.js)

Using the code porvided in the course, aswer the questions below:

1. What the App component is related to Order?
>> A: The App component is the parent of the Order component.

2. Complete the code in a way the the headphone and energyDrink orders will be children of the App component.

#### List of components and keys (Image.js, UserProfile.js)

Using the codes provided on the course, change the call of the UserProfile component so the list is generated correctly.

### Exercises (./my-pokedex)

Using the code provided on the course, implement at least these two components:

1. *Pokemon*: this component receive an object that contains the information about a pokemon and return the required informations to the user:
>>* Pokemon name;
>>* Pokemon type;
>>* Average weight and mesuring unit;
>>* Pokemon image;

>Those informations must be validated using PropType.

2. *Pokedex*: This component represent the pokemons encyclopedia. It receives a list of pokemons as parameters to be shown on screen. Each of the received pokemon, the pokedex call th Pokemon component.