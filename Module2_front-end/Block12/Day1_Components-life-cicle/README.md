# Day 12.1 - Components' life cicle

## Fixing exercises

#### Life cicle App (/fixing-exercises-12.1/components/Connections.js and /fixing-exercises-12.1/components/Profile.js)

Using the codes provided, put it in the respective functions so the application will work accordingly.

##### (/fixing-exercises-12.1/components/RandomUsers.js)

Access the API Random Users and render a loading component while waiting for the data. After receiving the data, the component must be render showing photo, name, email and age of the user.
If the user is older than 50, the component must not be rendered.

## Exercises

1. Exercise 1:
* Consume the given API that provides random dog photos so the first requisition happens when the component is mounted.
* There must be a loading element before the requisitions and a button to get more dog photos.

2. Exrcise 2:
* Don't update the component if the image url includes the word terrier.
* Save the last image generated into the localStorage after each update.
* After the update of the component,  show an alert with the dog's breed.

3. Bonus:
* Allow the user to name the dogs through an input.
* Create a button that saves the photo and tha name of the dog into the localStorage.
* If there data stored in the localStorage, don't do the fetch and get the last saved image.
