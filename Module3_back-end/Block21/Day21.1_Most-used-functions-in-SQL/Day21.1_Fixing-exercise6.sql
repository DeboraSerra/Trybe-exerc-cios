USE sakila;
# PART 1
# EXERCISE 1
SELECT active, COUNT(*) FROM customer
GROUP BY active;

# EXERCISE 2
SELECT active, store_id, COUNT(*) FROM customer
GROUP BY active, store_id;

# EXERCISE 3
SELECT rating, AVG(rental_duration) AS average FROM film
GROUP BY rating
ORDER BY average DESC;

# EXERCISE 4
SELECT district, COUNT(*) AS count FROM address
GROUP BY district
ORDER BY count DESC;

# PART 2
# EXERCISE 1
SELECT rating, AVG(length) AS avg_length
FROM sakila.film
GROUP BY rating
HAVING avg_length BETWEEN 115.0 AND 121.50
ORDER BY avg_length DESC;

# EXERCISE 2
SELECT rating, SUM(replacement_cost) AS sum_replacement
FROM sakila.film
GROUP by rating
HAVING sum_replacement > 3950.5
ORDER BY sum_replacement;