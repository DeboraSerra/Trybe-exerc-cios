# Day 4-1 - JavaScript - First steps

1 - Make five programs, one for each basic arithmetic operation. Your program must have two constants, _a_ and _b_, defined on the beginning with the operating values. Do programs to:

  * Sum (a + b)
  * Subtraction (a - b)
  * Multiplication (a * b)
  * Division (a / b)
  * Module (a % b)

2 - Make a program that return the biggest of two numbers. Define in the beginning of the program two constants with the value that will be compared.

3 - Make a program that return the bigger of three numbers. Define in the beginning of the program three constants with the value that will be compared.

4 - Make a program that, given a number defined in a constat, return 'positive' if the value is positive, 'negative' if it's negative and 'zero' if neither cases happen.

5 - Make a program that define three constants with the value of three internal angles of a triangle. Return 'true' if they represent the angles of a triangle and 'false', otherwise. If any of the angles is invalid the program must return an error message.

> So the angles of the triangle are valid, their sum must be equal to 180 degrees.
> An angle will be considered invalid if it doesn't have a positive value.

6 - Write a program that receives the name of a chess piece and return its movement.

  > As a challenge, make the program work if it receives the name of the piece either with upper or lowercase, without increasing the number of conditionals.
  > If the name of the piece is invalid, the program should return a message of error.
  > Exemple: bishop -> diagonals;

7 - Write a program that turns a percentage score (from 0 from 100) in letter concepts from A to F. Follow this rules:

> percentage >= 90 -> A
> Percentage >= 80 -> B
> Percentage >= 70 -> C
> Percentage >= 60 -> D
> Percentage >= 50 -> E
> Percentage < 50 -> F

> The program must return an error message and break if the score is less than 0 or bigger than 100.

8 - Write a program that define three numbers in constants and return 'true' if at least one of them is _even_. Otherwise, it returns 'false'.

9 - Write a program that define three numbers in constants and return 'true' if at least one of them is _odd_. Otherwise, it returns 'false'.
  > Bonus: use only one `if`.

10 - Write a program that start with two values in two different constants: the cost of a product and its sale price. Calculate the profit (value of the sale minus the cost of the product) the company will have after selling one thousand of these products.
> There is 20% taxes over the cost of the product.
> Your program must also show an error message and break if any of your entry values are smaller than zero.
> The profit of a product is the result of the subtraction of the sale value and its cost. and the 20% tax is also a part of the cost. (totalCost = cost + tax / profit = salePrice - totalCost)

11 - A person that works with signed licence in Brazil have deduced from their salary a pension tax (INSS) and an income tax (IR).
Make a program that, given a gross salary, calculate the net salary to be received.
The notation to a R$1500,10 salary, for exemple, must be 1500.10. To the tax ranges, use the following references:
> INSS (Instituto Nacional do Seguro Social)
> Gross salary of less than R$ 1.556,94: aliquot of 8%
> Gross salary from R$ 1.556,95 to R$ 2.594,92: aliquot of 9%
> Gross salary from R$ 2.594,93 to R$ 5.189,82: aliquot of 11%
> Gross salary above R$ 5.189,82: maximum aliquot of R$ 570,88

> IR (Imposto de Renda)
> Less than R$ 1.903,98: free from income tax
> From R$ 1.903,99 to 2.826,65: aliquot of 7,5% and portion of R$ 142,80 to be deduced from the tax
> From R$ 2.826,66 to R$ 3.751,05: aliquot of 15% and portion of R$ 354,80 to be deduced from the tax
> From R$ 3.751,06 to R$ 4.664,68: aliquot of 22,5% and portion of R$ 636,13 to be deduced from the tax
> Above R$ 4.664,68: aliquoti of 27,5% and portion of R$ 869,36 to be deduced from the tax.

Exemple: A person that receive a gross salary of R$ 3.000,00. The calculations will be:
The gross salary is between R$ 2.594,93 and R$ 5.189,82, so the aliquot to the INSS is 11%. The INSS will be 11% of R$ 3.000, which is, R$ 330,00.
To discover the base-salary, subtract INSS aliquot from the gross salary: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
To get the IR value, we use the salary (already with INSS deduced) between R$ 1.903,99 and 2.826,65, which means aliquot of 7.5%, with a portion of R$ 142,80 to be deduced of the tax. So then we have:
R$ 2.670,00: salary with INSS deduced;
7.5%: IR aliquot;
R$ 142,80 portion to be deduced from the tax.
Doing the math, we have: (7,5% of R$ 2.670,00) - R$ 142,80 = R$ 57,45
The last calculation to get the net salary is R$ 2.670,00 - R$ 57,45 (base-salary - IR) = R$ 2.612,55.
Result: R$ 2.612,55.