USE sakila;
SET SQL_SAFE_UPDATES = 0;
# exercise 1
SELECT actor_id FROM actor
WHERE first_name = 'KARL';

DELETE FROM film_actor
WHERE actor_id = 12;

DELETE FROM actor
WHERE first_name = 'KARL';

# exercise 2
SELECT actor_id FROM actor
WHERE first_name = 'MATTHEW';

DELETE FROM film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM actor
WHERE first_name = 'MATTHEW';

# exercise 3
DELETE FROM film_text
WHERE description LIKE '%SAGA%';

# exercise 4
TRUNCATE film_actor;
TRUNCATE film_category;
