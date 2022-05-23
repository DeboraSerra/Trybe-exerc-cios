# exercise 1
SELECT * FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

# exercise 2
SELECT first_name FROM sakila.customer
WHERE active IS FALSE
AND store_id = 2
AND first_name <> 'KENNETH'
ORDER BY first_name;

# exercise 3
SELECT title, description, release_year, replacement_cost FROM sakila.film
WHERE replacement_cost >= 18
AND rating LIKE '%G%'
ORDER BY replacement_cost DESC, title
LIMIT 100;

# exercise 4
SELECT COUNT(*) FROM sakila.customer
WHERE active = 1
AND store_id = 1;

# exercise 5
SELECT * FROM sakila.customer
WHERE active = 0
AND store_id = 1;

# exercise 6
SELECT * FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;
