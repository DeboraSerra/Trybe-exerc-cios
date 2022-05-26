USE sakila;
# exercise 1
UPDATE actor
SET first_name = 'JULES'
WHERE actor_id IN (27, 47, 186, 199);

# exercise 2
UPDATE category
SET name = 'Science Fiction'
WHERE category_id = 14;

# exercise 3
UPDATE film
SET replacement_cost = 25
WHERE length > 100 and
rating LIKE '%G%' and
replacement_cost > 20;

# exercise 4
UPDATE film
SET rental_rate = 10
WHERE length BETWEEN 0 AND 100;
UPDATE film
SET rental_rate = 20
WHERE length > 100;
