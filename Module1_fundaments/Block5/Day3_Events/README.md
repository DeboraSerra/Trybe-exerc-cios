# Day 5-3 - JavaScript - Events

Using the code given to us in the course, we were asked to follow the instructions below:

1. Create a function that create each day of the calendar and add them as child of the tag `ul` with the ID _days_.

> The days must be inside a `li` tag, and all of them must have the class _day_;

> The days 24, 25 and 31 are holidays and, beside the class _day_, must have the class _holiday_. Ex: <li class="day holiday">24</li>;

> The days 4, 11, 18 and 25 are friday. They must have the class _day_ and the class _friday_;

2. Create a function that receive a string as parameter and create a button named _Feriados_ (Holidays).

> Add to this button the ID _btn-holiday_;

> Add this button as child of the tag `div` with the class _buttons-container_.

3. Create a function that add to the button _Feriados_ a 'click' event that chenge the background color of the days that have the class _holiday_.

> It is interesting that this button have the reverse logic too. When it is clicked again, the number return to the original color _rgb(238,238,238)_.

4. Create a function that receive a string as parameter and create a button called _Sexta-feira_ (Friday).

> Add the ID _btn-friday_.

> Add this button as a child to the tag `div` with the class _buttons-container_.

5. Create a function that add to the button _Sexta-feira_ a 'click' event to change the text shown on the fridays.

> It is interesting that this button have the reverse logic too. When it is clicked again, return the text to the previus configuration.

6. Create two functions to create a 'zoom' efect. When the cursor passes over a day, its text size must be bigger and, when it leaves, the text size must return to the original size.

7. Create a function that add a task to the calendar. It must receive a string containing the task name as parameter and create a `span` tag with the task.

> The element must be added as a child of the `div` tag that have the class _my-tasks_.

8. Create a function that add a label color to the task created in exercise 7. It must receive a string ('color') and create an element `div` with the class _task_.
> The parameter color must be used as background color to the created `div`.
> The created element must be a child to the `div` tag with the class _my-tasks_.

9. Create a function that add an event so, when the you click the element div with the `div` tag corresponding to your task, give it the class _task selected_, which means that your element will be selected.

> When you click again on the element, your class must be only _task_, which means the task will no longer be selected.

10. Create a function to add an event that, when you click on a day of the month, it will receive the label color of your selected task.

> When you click the same day again, its color must return to the original one, rgb(119,119,119).

##### Bonus:

Let's add a to-do list to your calendar?

Create a function that, when you type in an appointment in the text box _COMPROMISSOS_, add the item to the list _MEUS COMPROMISSOS_ when you click the button _ADICIONAR_.

> If nothing is typed in the box, the function must return an alert with an error message when you click the button _ADICIONAR_.

> When you press the 'Enter' key the event must also be triggered.
