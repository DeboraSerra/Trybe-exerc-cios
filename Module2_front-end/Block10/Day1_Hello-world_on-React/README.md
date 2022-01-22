# Day 10.1 - 'Hello, World!' on React

The directories exercise1-10.1 and exercise2-10.2 were created following the proposed exercises below:

##### Exercise1-10.1

1. Create a new project using `npx create-react-app exercise1-10.1` and access the directory created.

2. Create a simple to do List following the steps below:

>* Inserte the _Task_ function given in the course above your app component inside the App.js file.

>* Now, call the function inside your App component. Insert the value you want, save the page and use the `npm start` command.

>* At last, create a tasks array and use the HOF map to show each item of the array as a list item on your App component.


##### Exercise2-10.1

3. Create another project using `npx create-react-app`.

>* In the _src_ directory, create a file called _Header.jsx_, that will represent the header component;

>* In this file, create a React class called Header. This class must render an `h1` tag with the text _Front-end Content_;

>* In the App.js file, import the Header component created before and render it;

>* In the _src_ directory, create a new file called Content.jsx, that will represent the Content component;

>* In this file, create a React class called Content and add the array provided on the course;

>* The Content class must render the array in the following format:
```
The content is: `Name of the content`
Status: `Status of the content`
Block: `Block of the content`
```
>* Remember to add the _key_ attribute to the parent element of this list, when rendering.

>* Export the Content component, import it in the App.js file and render it;

>* Create a new file called Footer.jsx and create a class Footer in it.

>* This class must render a tag `h1` with the text _And this is just the begining_. Don't forget to export the component.

>* Import and render the Footer component in the App.js file.

#### Bonus

4. Add Style to the last exercise. Add CSS classes to your components in a way that each content listed is a Card.
