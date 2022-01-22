# Bonus project - Mystery letter

The project Mystery letter was created using the directions below. To use it you have to type any text inside the input and click the button to generate the letter. If you want to change the style of the any word you just have to click it until you are satisfied with the style.

1. There must be an input with id="carta-texto" where the user can type the content of the letter.

2. There must be a paragraph with id="carta-gerada" whre the user will see the result of the letter.

3. There must be a button with id="criar-carta" amd when you click it, the letter must be generated.

> Important points:

>* Each word must apear inside a tag `span`.
>* The tags `span` must be added as childre to the paragraph `carta-gerada`.

4. When you create a aletter throw the button with id="criar-carta", the input `carta-texto` must remain with the text typed.

5. If the user doesn't type the field or type only spaces, the message 'Por favor, digite o conteúdo da carta.' must apear as response.

##### Create the classes below with the properties listed for each one

6. Class `newspaper`:
>* `background-color` with the value `antiquewhite`
>* `font-family` with the value `Times New Roman`
>* `font-weight` with the value `bold`

7. Class `magazine1`:

>* `background-color` with the value `teal`
>* `color` with the value `white`
>* `font-family` with the value `Verdana`
>* `font-weight` with the value `900`
>* `text-transform` with the value `uppercase`

8. Class `magazine2`:

>* `background-image` with the image `images/pink-pattern.png`
>* `color` with the value `fuchsia`
>* `font-family` with the value `Verdana`
>* `font-weight` with the value `900`

9. Class `medium`:

>* `font-size` with the value `20px`
>* `padding` with the value `8px`

10. Class `big`:

>* `font-size` with the value `30px`
>* `padding` with the value `10px`

11. Class `reallybig`:

>* `font-size` with the value `40px`
>* `padding` with the value `15px`

12. Class `rotateleft`:

>* `transform` with the value `rotate(-5deg)`

13. Class `rotateright`:

>* `transform` with the value `rotate(5deg)`

14. Class `skewleft`:

>* `transform` with the value `skewX(10deg)`;

15. Class `skewright`:

>* `transform` with the value `skewX(-10deg)`;

16. Add the classes in a random way to style the words.

>* The classes must be added to the `span` tags in a random way.
>* Add one of each group of class to each word.
>* Use the groups:
>>  - `newspaper`, `magazine1`, `magazine2` (style group)
>>  - `medium`, `big`, `reallybig` (size group)
>>  - `rotateleft`, `rotateright` (rotation group)
>>  - `skewleft`, `skewright` (inclination group)

#### Bonus

17.Whith the letter generated, add the possibility to change the style of a word when it is clicked.

>* When you click a word, a new set of random styles will be chosen.
>* The number of changes must be ilimited.

18. The page must have a paragraph with the id _carta-contador_ where there will be a word counter.

>* This counter must show the number of words in the generated mystery letter.
