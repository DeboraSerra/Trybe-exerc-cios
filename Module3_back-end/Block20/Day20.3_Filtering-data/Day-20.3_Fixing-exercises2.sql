# exercise 1
SELECT description FROM sakila.film
WHERE title LIKE '%ace%';

# exercise 2
SELECT description FROM sakila.film
WHERE description LIKE '%china';

# exercise 3
SELECT description FROM sakila.film
WHERE description LIKE '%girl%'
AND title LIKE '%lord';

# exercise 4
SELECT description FROM sakila.film
WHERE title LIKE '___gon%';

# exercise 5
SELECT description FROM sakila.film
WHERE title LIKE '___gon%'
AND description LIKE '%Documentary%';

# exercise 6
SELECT * FROM sakila.film
WHERE title LIKE '%academy'
OR title LIKE 'mosquito%';

# exercise 7
SELECT * FROM sakila.film
WHERE description LIKE '%monkey%'
AND description LIKE '%sumo%';