# Project Trybewards

1. Create a green bar on the top of the page

* This bar must have the class `header`;
* The `header` must be a flex container;
* It must have the background as the color `rgb(50, 167, 145)`;

2. Add the logo with the class `trybewarts-header-logo` in the header bar;

* There must be and `img` element with the class `trybewarts-header-logo`;
* The attribute src of the logo must direct to images/trybewarts-header-logo.svg

3. Add a login form on the right top part of the bar with the inputs email, password and a login button;

* The form must have the class `trybewarts-login`;
* The email input must have name `email` and and placeholder `Email`;
* The password input must have name `password` and placeholder `Password`;
* The button must have the text _Sign in_;
* The form must be a flex container;
* The form must be right of the log;
* When the you fill the form and click the button, it must be validated that:
>>* In case the email is "tryber@teste.com" and the password is "123456" must appear an alert with the text "Hi, Tryber!"
>>* In any other case must appear an alert wit the text "Wrong e-mail or password"

4. Create a title with the text _Trybewarts_ centered inside the header

* There must be an `h1` element with the id `trybewarts-header-title` and with the text _Trybewarts_;
* The title must be centered;
* The header must have 3 child elements;
* The child in the middle must be the title;

5. Add a form to the body of the page.

* there must be a form with the id `evaluation-form`;
* The form must be inside a tag `main`;
* The `main` and the `form` must be flex containers;
* The form must have width 675px;

6. Set the main axis to be vertical.

7. Add the Trybewarts logo on the right side of the page.

* Create and `img` element with the id `trybewarts-forms-logo`;
* The src attribute must direct to images/trybewarts-colored.svg;
* The image must have 500px of hight;

8. Add to the form with the id `evaluation-form` the inputs name, last name and email.

* Must have an input with the id `input-name` and placeholder `Name`;
* Must have an input with the id `input-lastname` and placeholder `Last name`;
* Must have an input with the id `input-email` and placeholder `Email`;

9. Add a select with the id `house` with the options Gitnória, Reactpuff, Corvinode and Pytherina.

* Must have the option with text and value `Gitnória` and id `gitnoria-house`;
* Must have the option with text and value `Reactpuff` and id `reactpuff-house`;
* Must have the option with text and value `Corvinode` and id `corvinode-house`;
* Must have the option with text and value `Pytherina` and id `pytherina-house`.

10. Posiotion the fields Name and Last name to be in line.

11. Position the fields Email and House to be inline.

12. Add to the form a field to the student choose which familly he/she identifies.

* Create an element with the id `label-family` and the text "Which is your family?";
* Create an input with the type radio with the name `family` and value `Frontend`;
* Create an input with the type radio with the name `family` and value `Backend`;
* Create an input with the type radio with the name `family` and value `FullStack`;
* Position the radio buttons to be one on top of the other and below the label.

13. Create entry fields with the type checkbox with six options.

* Create an element with the id `label-content` and the text "Which subjects you want to learn?";
* Create an input type checkbox with the value `HoFs`;
* Create an input type checkbox with the value `Jest`;
* Create an input type checkbox with the value `Promises`;
* Create an input type checkbox with the value `React`;
* Create an input type checkbox with the value `SQL`;
* Create an input type checkbox with the value `Python`;
* Position all the checkbox under the label.

14. Create an evaluation field.

* An element with the id `label-rate` and the text "Rate Trybewarts:" must be created;
* In must be made with ten radio buttons with the options 1 to 10;
* They must have the value matching from 1 ro 10;
* They must ave the name `rate`;
* Position them to stay side by side and roght to the label.

15. Create a textarea wih the id `textarea` and a label with the class `textarea` with max-width of 500;

* A label with the class `textarea` and the text "Leave your comment:" must be created;
* the field textarea must accept the max of 500 characters.

16. Create a checkbox field with the id `agreement` to validate the informations.

* A label with the id `label-infos` and the text "Do you agree with the use of these informations?" must be created;
* The field must be a checkbox;
* It must have the id `agreement`;
* Position it at the side of the label;

17. Create a Send button to submit the form.

* A button with the type submit must be created;
* The button must have the id `submit-btn`;
* It must have the text _Send_;

18. Make so the Send button will only be available if the checkbox from requisite 16 is checked;

* The button must be disabled in case the checkbox isn't selected;
* The button must me available when the checkbox is selected.

19. Create a footer at the end of the page.

* The footer must have the text "Direitos reservados à Trybewarts©"

### BONUS

20. Create a counter with the id `counter` containing the number of characters available in the textarea, from 500 to 0, that must be updated every time something is typed.

* The counter must have the id `counter`;
* The counter must beging with the value 500;
* It must decrease when something is typed on the textarea fiel;
* It should increase when something is deleted from the textarea;
* The element textarea must have the id `textarea`.

21. Make so when the Sen button is clicked, the content from the tag `form` will be replaced with the informations filled by the user.

* All th eform field must be replaced with the informations from the user;
* Must have a fiel in the format "Name: User name";
* Must have a fiel in the format "Email: email@mail.com";
* Must have a fiel in the format "House: Chosen house";
* Must have a fiel in the format "Family: Chosen family";
* Must have a fiel in the format "Subjects: subj1, subj2, sbj3";
* Must have a fiel in the format "Evaluation: Score";
* Must have a fiel in the format "Comments: comments here".
