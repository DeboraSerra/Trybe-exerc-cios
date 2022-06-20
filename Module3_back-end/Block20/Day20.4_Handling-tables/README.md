# Day 20.4 - Handling tables

The fixing exercises below were developed using the sakila table.

###### (Day20.4_Fixing-exercises1.sql)

1. Insert one new employee in the table `sakila.staff`.
2. Insert two new employees with only one query.
3. Select the five first names and last names from the table `sakila.customer` and insert this data into the table `sakila.actor`.
4. Insert three categories with one query in the table `sakila.category`.
5. Insert a new store in the table `sakila.store`.

###### (Day20.4_Fixing-exercises2.sql)

1. Update all the lines from the table `sakila.actor` that have the first name 'JULIA' to 'JULES'.
2. Change the line from the category table where the value of the column is 'Sci-fi' to 'Science Fiction'.
3. Change to '$25' the rent value of the movies that have more than 100 minutes of length and have the classification 'G', 'PG' or 'PG-13' and a replacement cost bigger than $20.
4. Change the rent of the movies with length between 0 100 minutes to $10 and the movies with length bigger than 100 minutes to $20.

###### (Day20.4_Fixing-exercises3.sql)

1. Delete the data of the actor named 'KARL'.
2. Delete the actors named 'MATTHEW'.
3. Delete all the entries that have the wor 'saga' in their description in the table `film_text`.
4. Delete all the entries of the tables `film_actor` and `film_category`.

###### (Day20.1_exercises.sql)
For the exercises, we were given a table and asked to follow the questions below:

1. Insert the given Pixar productions into the table `Movies`.
2. The movie 'Finding Nemo' was classified as 6.8, made 450M in the intern marked and 370M in the international market. Insert this information in the table `BoxOffice`.
3. The director of the movie 'Finding Nemo' is wrong. Correct this data.
4. The title of the movie 'Ratatouille' is wrong in the table `Movies` and was released in 2007. Make the corrections.
5. Insert the new information given into the table `BoxOffice`.
6. Delete the movie 'WALL-E' from the table `Movies`.
7. Delete all the movies directed by 'Andrew Staton' from the table `Movies`.
8. Change the classification to '9.0' for all the movies that made more than 400M on the inner market in the table `BoxOffice`.
9. Change the classification to '6.0' for all the movies that made less than 300M on the international market and more than 200M on the inner market in the table `BoxOffice`.
10. Delete from the table `Movies` all the movies with less than 100 minutes of length.
