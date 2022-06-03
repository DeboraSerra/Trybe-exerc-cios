# exercise 1
SELECT COUNT(*) FROM sakila.payment
WHERE DATE(payment_date) = '2005-05-25';

# exercise 2
SELECT COUNT(*) FROM sakila.payment
WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';

# exercise 3
SELECT 
	(DATE(rental_date)) AS date,
    (YEAR(rental_date)) AS year,
    (MONTH(rental_date)) AS month,
    (DAY(rental_date)) AS day,
    (HOUR(rental_date)) AS hour,
    (MINUTE(rental_date)) AS min,
    (SECOND(rental_date)) AS sec
	FROM sakila.rental
WHERE rental_id = 10330;

# exercise 4
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-07-28 22%';