def recursive_amount_even_numbers(n):
    amount = 0
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + recursive_amount_even_numbers(n - 1)
    else:
        return recursive_amount_even_numbers(n - 1)

print(recursive_amount_even_numbers(10))