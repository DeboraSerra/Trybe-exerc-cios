# exercise 1
SELECT b.domestic_sales, b.international_sales, m.title
FROM Pixar.BoxOffice AS b
INNER JOIN Pixar.Movies AS m
ON m.id = b.movie_id;

# EXERCISE 2
SELECT m.title, (b.domestic_sales + b.international_sales) AS sales
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id
WHERE b.international_sales > b.domestic_sales;

# EXERCISE 3
SELECT m.title, b.rating
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id
ORDER BY b.rating DESC;

# EXERCISE 4
SELECT t.*, m.*
FROM Pixar.Theater AS t
LEFT JOIN Pixar.Movies AS m
ON m.theater_id = t.id
ORDER BY t.name;

# EXERCISE 5
SELECT m.*, t.*
FROM Pixar.Theater AS t
RIGHT JOIN Pixar.Movies AS m
ON m.theater_id = t.id
ORDER BY t.name;

# EXERCISE 6
SELECT m.*
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
WHERE theater_id IS NOT NULL
AND b.rating > 8;