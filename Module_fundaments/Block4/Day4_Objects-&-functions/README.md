# Day 4-4 - JavaScript Objects & functions

#### Part I - Objects and For/In

Using the object below, do the following exercises:

> let info = {
>   personagem: 'Margarida',
>   origem: 'Pato Donald',
>   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
> };

1 - Print in the console a wellcome message to the character above, including its name. Expected value in console:

> Bem-vinda, Margarida

2 - Insert in the object a new property with the key name 'recorrente' and the value 'Sim' and, after that, print the object in the console. Value expected in the console:

> {
>   personagem: 'Margarida',
>   origem: 'Pato Donald',
>   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
>   recorrente: 'Sim'
> }

3 - Use a `for/in` that show all the keys in the object. Expected value in the console:

> personagem
> origem
> nota
> recorrente

4 - Use another `for/in`, but now show all the values of the keys in the object. Expected value in the console:

> Margarida
> Pato Donald
> Namorada do personagem principal nos quadrinhos do Pato Donald
> Sim

5 - Now, define a secont object with the same structure (same keys) from the first and the following values: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Then, print the values of each object together accordingly with the keys. Expected value in console:

> Margarida e Tio Patinhas
> Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
> Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
> Ambos recorrentes // Atenção para essa última linha!


Using the object below, do the following exercises:

> let leitor = {
>   nome: 'Julia',
>   sobrenome: 'Pessoa',
>   idade: 21,
>   livrosFavoritos: [
>     {
>       titulo: 'O Pior Dia de Todos',
>       autor: 'Daniela Kopsch',
>       editora: 'Tordesilhas',
>     },
>   ],
> };

6 - Access the keys `nome`, `sobrenome` and `titulo`, that is inside the key `livrosFavoritos`, and use `console.log` with the following format: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

7 - Add a new favorite book in the key `livrosFavoritos`, that is an array. Assign to this key an object with the following information:

> {
>   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
>   autor: 'JK Rowling',
>   editor: 'Rocco',
> }

8 - Access the keys `name` and `livrosFavoritos` and make a `console.log` on the following format: "Julia tem 2 livros favoritos".

#### Parte II - Functions

1 - Create a function that receive a string and return true if it is a palindrome, or false if it isn't.

> itsPalindrome('arara') ;
> Expected return: true
> itsPalindrome('desenvolvimento') ;
> Expected return: false

2 - Create a function that receive an array of integers and return the index of the biggest value.

> Test array: [2, 3, 6, 7, 10, 1]; .
> Expected return: 4 .

3 - Create a function that receive an array of integers and return the index of the smallest value.

> Test array: [2, 4, 6, 7, 10, 0, -3]; .
> Expected return: 6 .

4 - Create a function that receive an array of names and return the name with tha biggest number of characters.

> Test array: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
> Expected return: Fernanda.

5 - Create a function that receive an array of integers and return the integer that repeats the most.

> Test array: [2, 3, 2, 5, 8, 2, 3]; .
> Expected return: 2.

6 - Create a function that receive an integer N and return the sum of the integers from 1 to N.

> Test value: N = 5 .
> Expected return: 1+2+3+4+5 = 15.

7 - Create a function that receive a string `word` and another string `end`. Check if the string `end` is the end of the string `word`. Consider that the string `end` will always be smaller then the string `word`.

> checkEnd('trybe', 'be') ;
> Expected return: true
> checkEnd('joaofernando', 'fernan') ;
> Expected return: false

#### Bonus

1 - (Hard) Make a program that receive a string in Roman numerals and return the number the string represents.
Atention! This exercises once apeared in a selective process of a big multinational!

Hint: A string is an array of characters, so each element of the array is a letter.

What about create an object that associate each letter to a number to an easy access?

Atention! When you have a smaller number to the right of a bigger number, we must sum them. However, if the small number is to the left of the bigger one, it must be subtracted.

2 - Create a function called `arrayOfNumbers` that will receive a variable `vector`as parameter. Use a loop for, go through this variable, get the _even_ numbers and add them to a new array that must be returned at the end of the function.

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

3 - Starting with the array bellow, return an object that contains the name of the fruit as a key and the amount of time it apears in the array as the value. For exemple, the array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], must return { Melancia: 3, Abacate: 1, Uva: 1 } when passed as the argument to the function.

After that, print this result on screen with a message on the following format: Sua cesta possui: x Melancias, x Abacates...

> const basket = [
>   'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
>   'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
>   'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
>   'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
>   'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
>   'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
>   'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
>   'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
>   'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
>   'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
>   'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
>   'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
>   'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
>   'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
>   'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
>   'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
>   'Banana', 'Pera', 'Abacate', 'Uva',
> ];


Using the object bellow, do the following exercises:

> let moradores = {
>   blocoUm: [
>     {
>       nome: 'Luiza',
>       sobrenome: 'Guimarães',
>       andar: 10,
>       apartamento: 1005,
>     },
>     {
>       nome: 'William',
>       sobrenome: 'Albuquerque',
>       andar: 5,
>       apartamento: 502,
>     },
>   ],
>   blocoDois: [
>     {
>       nome: 'Murilo',
>       sobrenome: 'Ferraz',
>       andar: 8,
>       apartamento: 804,
>     },
>     {
>       nome: 'Zoey',
>       sobrenome: 'Brooks',
>       andar: 1,
>       apartamento: 101,
>     },
>   ],
> };

4 - Access the keys `nome`, `sobrenome`, `andar` and `apartamento` of the last resident of _blocoDois_ and make a `console.log` on the following format: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".

5 - Use `for` to print the full name of all the residents on _bloco 1_, accessing its keys `nome` and `sobrenome`, after that do the same to the residents of _bloco 2_.
