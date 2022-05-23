USE Scientists;
# exercise 1
SELECT * FROM Scientists
WHERE Name LIKE '%E%';

# exercise 2
SELECT Name FROM Projects
WHERE Code LIKE 'a%'
ORDER BY Name;

# exercise 3
SELECT Code, Name FROM Projects
WHERE Code LIKE '%3%'
ORDER BY Name;

# exercise 4
SELECT Scientist FROM AssignedTo
WHERE Project IN('AeH3', 'Ast3', 'Che1');

# exercise 5
SELECT * FROM Projects
WHERE Hours > 500;

# exercise 6
SELECT * FROM Projects
WHERE Hours BETWEEN 250 AND 800;

# exercise 7
SELECT Name, Code FROM Projects
WHERE Name NOT LIKE 'A%';

# exercise 8
SELECT Name FROM Projects
WHERE Code LIKE '%h%';