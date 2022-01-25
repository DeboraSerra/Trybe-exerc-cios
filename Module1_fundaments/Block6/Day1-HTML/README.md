# Day 6-1 - HTML & CSS - Forms

Create a file form.html, style.css and script.js and create a resume form according with the specification below.

Initially make the validations using the html.

Create a `fieldset` to the following personal data:

* Name - text
>> * Max 40 characters
>> * Required

* Email - text
>> * Max 50 characters
>> * Required

* Social security number - text
>> * Max 11 characters
>> * Required

* Adress - text
>> * Max 200 characters
>> * Required

* City - text
>> * max 28 characters
>> * Required

* State - Select
>> * All brazilian states (use JS to generate the `option` tags)
>> * Required

* Type - Radio Button
>> * House, Apartment
>> * required


Create another `fieldset` to the last job data

* Abstract of the resume - TextArea
>> * Max 1000 characters
>> * Required

* Position - text
>> * Max 40 characters
>> * Required

* Job description - test
>> * Max 500 characters
>> * Required

* Start date - text
>> * Check if the date format is DD/MM/YYYY.
>> * The day must be between 0 and 31.
>> * The month must be between 0 and 12.
>> * The year can't be a neative number.

In case any of the conditions is invalid when the send button is clicked, an alert must be shown.

Create a JS function using `preventDefault()`.

Implement the validations requested before through JS.

In case all the data is valid, insert a `div` with the data inserted at the form.

Create a _Clear form_ button to clear all the fields of the form and the `div` with the resume.
