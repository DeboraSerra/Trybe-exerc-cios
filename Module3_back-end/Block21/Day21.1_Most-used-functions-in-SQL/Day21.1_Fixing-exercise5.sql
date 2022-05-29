# EXERCISE 1
SELECT AVG(length) AS 'MÉDIA DE DURAÇÃO',
	MIN(length) AS 'DURAÇÃO MÍNIMA',
    MAX(length) AS 'DURAÇÃO MÁXIMA',
    SUM(length) AS 'TEMPO DE EXIBIÇÃO TOTAL',
    COUNT(length) AS 'FILMES REGISTRADOS'
FROM sakila.film;
