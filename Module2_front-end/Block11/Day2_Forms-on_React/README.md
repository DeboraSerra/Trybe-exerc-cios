# Day 11.2 - Forms on React

## Fixing exercises (fixing-exercises/fixing-exercises-11.2.js)

### Controlled Components

1. Create a form with one select field, two different inputs and a textarea and make one of them be a controlled component.

2. Use the 'React Developer Tools' to see the state setting.

### Generic event handlers

3. Make so all the elements from the form are controlled with a generic handler.

4. Add a checkbox to your form and make sure the event is handled correctly.

5. Add an input to add files.

6. Use fieldset in some elements.

### Transferring informations from the child component to the parent component

7. Make two of your elements be child component to the form.

8. Make two validations on one of the components e two on the other.

9. Create a state called formWithError that must be true if any of the components have errors and false otherwise.

## Creating a React Form

Create a new react project to your application and use css if you want.

1. Create a `fieldset` with the following inputs:

* Name - text (Max 40 characters, required, the letters must be turned to uppercase when typed)

* Email - text (Max 50 characters, required)

* Social Security Number - text (Max 11 characters, required)

* Address - text (Max 200 characters, required, remove any special character that might be typed)

* City - text (Max 28 characters, required, clean the field if the text starts with number)

* State - select (All Brazilian States, required)

* Housing type - radio button (House and apartment, required)

2. Create another `fieldset` to the data of your last job:

* Resume abstract - textarea (Max 1000 characters, required)

* Position - textarea (Max 40 characters, when the mouse pass over the field show an alert that says 'Fill this information carefully', required)

* Job description - text (Max 500 characters, required)

3. Create a button that, when it is clicked, shows a `div` with the data from the form;

4. Create a _clear_ button to clear the form fields and the `div` create before.
