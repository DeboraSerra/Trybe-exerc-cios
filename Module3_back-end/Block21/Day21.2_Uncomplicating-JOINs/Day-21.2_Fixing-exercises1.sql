USE sakila;
# EXERCISE 1
SELECT a.actor_id, a.first_name, f.film_id
FROM actor AS a
INNER JOIN film_actor AS f
ON a.actor_id = f.actor_id;

# EXERCISE 2
SELECT s.first_name, s.last_name, a.address
FROM staff AS s
INNER JOIN address AS a
ON s.address_id = a.address_id;

# EXERCISE 3
SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address
FROM customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
ORDER BY first_name DESC
LIMIT 100;

# EXERCISE 4
SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
WHERE district = 'California'
AND first_name LIKE '%RENE%';

# EXERCISE 5
SELECT c.first_name, COUNT(a.address)
FROM customer AS c
INNER JOIN address AS a
ON a.address_id = c.address_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY first_name DESC;

# exercise 6
SELECT s.first_name, s.last_name, AVG(p.amount)
FROM staff AS s
INNER JOIN payment AS p
WHERE YEAR(payment_date) = '2006'
GROUP BY first_name, last_name;

# EXERCISE 7
SELECT a.actor_id, a.first_name, f.film_id, f.title
FROM actor AS a
INNER JOIN film AS f
INNER JOIN film_actor AS fa
ON a.actor_id = fa.actor_id AND f.film_id = fa.film_id;
