# Day 21.2 - Uncomplicating JOINs

To run the queries for first Fixing exercises, restore the [sakila database](https://dev.mysql.com/doc/index-other.html), open the file of interest, select the query referring to the exercise you want to see and press `ctrl+enter`.

To run the queries for the second Fixing exercises, restore the [hr database](https://github.com/nomemory/hr-schema-mysql) and follow the procedures described before.

The Exercises were made based on a database called pixar and it's not possible to share.

## INNER JOIN
###### (Day-21.2_Fixing-exercises1.sql)
1. Show the actor's id, name and the id of the movies they acted.
2. Show the name, last name and address of each staff.
3. Show the id, name and email, address id and street name of the first 100 clients ordered by name.
4. Show the name, email, address id, address and district of the clients who live in California and have 'rene' in their names.
5. Show the name and amount of address of the clients. Order it by name and chow only the active clients.
6. Show nam, last name and average amount payed to the staff in the year 2006 and group them by name and last name of the employee.
7. Show the actor id, name, movie id and movie title.

## SELF JOIN
###### (Day-21.2_Fixing-exercises2.sql)

1. Show the name of the employees and their manager that have different departments.
2. Show the name and the amount of people under each manager.

## Exercises
###### (Day-21.2_exercises.sql)
1. Find the domestic sales and the international sales of each movie.
2. Find the number of sales for each movie that have international sales bigger than domestic sales.
3. Show the movies and their ratings.
4. Show the data of all the movie theaters and the movies displayed, if they have it.
5. Show the data of all the movies and, if they are displayed in a movie theater, show which one.
6. Show all the movies that are in display and have rating bigger than 8.
