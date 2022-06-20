# Day 21.1 - Most used functions in SQL

To run the queries for Fixing exercises, restore the [sakila database](https://dev.mysql.com/doc/index-other.html), open the file of interest, select the query referring to the exercise you want to see and press `ctrl+enter`.

To run the queries for the exercises, restore the [hr database](https://github.com/nomemory/hr-schema-mysql) and follow the procedures described before.
## Manipulating strings
###### (Day21.1_Fixing-exercise1.sql)

1. Show the word 'trybe' in uppercase.
2. Turn the phrase 'Você já ouviu falar do DuckDuckGo?' to 'Você já ouviu falar do Google?'.
3. Find how many characters do we have in 'Uma frase qualquer'.
4. Extract and return only the word 'JavaScript' from the given phrase.
5. Turn the given phrase to lowercase.

## Conditions
###### (Day21.1_Fixing-exercise2.sql)

1. Use `IF` to show the id of the movie, the title and a column called 'conheço o filme?', where if the name of the movie is 'Ace Goldfinger', it has 'Já assisti a esse filme', if not, has 'Não conheço o filme'.
2. Use `CASE` to show the title, rating and a column called 'público-alvo' with the given values.

## Mathematic functions in MySQL
###### (Day21.1_Fixing-exercise3.sql)

### Part 1
1. Use `MOD` and `IF` to find if the value '15' is even or odd and call this column 'Par ou Ímpar'.
2. Consider a movie theater that accommodates 220 people.How many complete groups of 12 people we can take to the movie theater without anyone being left out.
3. Using the last query, how many seats would be empty?

### Part 2
1. Generate a value between 15 and 20.
2. Round the number '15.7515971' with a precision of 5 after the comma.
3. Consider we have an average shirts sale of 39.494. What is the approximate value rounded down?
4. Consider we have a subscription rate of 85.234% in a course. What is the approximate value rounded up?

## Working with dates
###### (Day21.1_Fixing-exercise4.sql)

1. Show the difference in days between '2030-01-20' and today.
2. Show the difference in hours between '10:25:45' and '11:00:00'.

## Using aggregation functions
###### (Day21.1_Fixing-exercise5.sql)

1. Show:
   * The average duration of the movies and call its column 'Média de Duração';
   * The minimum duration of the movies as 'Duração Mínima';
   * Tha maximum duration of the movies as 'Duração Máxima';
   * The sum of all the durations as 'Tempo de Exibição Total';
   * The amount of movies in the table as 'Filmes Registrados'.

## Showing and filtering data in a grouped way
###### (Day21.1_Fixing-exercise6.sql)

### Part 1

1. Show the amount of clients registered in the table `sakila.customer` that are active and the amount that are inactive.
2. Show the amount of active and inactive clients by store.
3. Show the average duration of renting and the rating of the movies in the table `sakila.film`. Group the results by rating and order by the average duration.
4. Show the district name and the amount of address registered by district.

### Part 2

1. Using the given query, modify it to show only the average duration between 115 and 121.5.
2. Using the given query, show only the total value of replacement cost that are above $3950.50.


## Exercises
###### (Day21.1_exerciseS.sql)

Using the table employees from the given database:

1. Show the biggest salary.
2. Show the difference between the biggest and the smallest salary.
3. Show the average salary to each job_id and order it.
4. Show the amount of money necessary to pay all the employees.
5. Show the biggest salary, tha smallest salary, the sum of all salaries and the average salary with 2 places after the comma.
6. Show the amount of people that work as developers.
7. Show the amount of money necessary to pay each job_id.
8. Use the query created before and change it to show only the money necessary to pay for the developers.
9. Show in descending order the average of each job_id except for the developers.
10. Show the average salary and the number of employees of all departments that have more than 10 employees. Group them by department_id.
11. Update the column `phone_number` in a way that all the phones beginning with '515' now begins with '777'.
12. Show the information of the employees where the first name have more than 8 letters.
13. Show the following information for each employee: id, first name and year they were hired.
14. Show the following information for each employee: id, first name and day they were hired.
15. Show the following information for each employee: id, first name and month they were hired.
16. Show the employees' name in uppercase.
17. Show the last name and hiring date of all the employees hired in july, 1987.
18. Show the following information for each employee: id, first name and time in days since they were hired.
