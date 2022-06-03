# exercise 1
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES ('Débora', 'Serra', '2', 'trybe@trybe.com.br', 2, 1, 'debs', 'trybe123');

# exercise 2
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES ('Rafa', 'Friedel', '2', 'trybe@trybe.com.br', 2, 1, 'rafs', 'trybe123'),
	('Anjel', 'Diniz', '2', 'trybe@trybe.com.br', 2, 1, 'anjel', 'trybe123');

# exercise 3
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
	SELECT first_name, last_name, 1, 'trybe@trybe.com', 1, 1, first_name, '123456' FROM sakila.customer LIMIT 5;

# exercise 4
INSERT INTO sakila.category (name)
VALUE ('a'),
    ('b'),
    ('c'),
    ('d'),
    ('e');

# exercise 5
INSERT IGNORE INTO sakila.store (manager_staff_id, address_id)
VALUE (5, 3);

SELECT * FROM sakila.store;