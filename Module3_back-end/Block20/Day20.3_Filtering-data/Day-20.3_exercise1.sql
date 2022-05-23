USE PecasFornecedores;
# exercise 1
SELECT * FROM Pecas
WHERE name LIKE 'GR%';

# exercise 2
SELECT * FROM Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor;

# exercise 3
SELECT peca, Preco, Fornecedor FROM Fornecimentos
WHERE Fornecedor LIKE '%N%';

# exercise 4
SELECT * FROM Fornecedores
WHERE name LIKE '%LTDA%'
ORDER BY name DESC;

# exercise 5
SELECT COUNT(*) FROM Fornecedores
WHERE code LIKE '%F%';

# exercise 6
SELECT * FROM Fornecimentos
WHERE Preco BETWEEN 15 AND 40
ORDER BY Preco;

# exercise 7
SELECT COUNT(*) FROM Vendas
WHERE order_date BETWEEN '2018-04-15' AND '2019-07-30';