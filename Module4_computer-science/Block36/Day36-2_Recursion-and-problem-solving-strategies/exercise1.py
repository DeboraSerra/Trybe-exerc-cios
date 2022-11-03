def amount_even_numbers(n):
    amount = 0
    for number in range(1, n + 1):
        if number % 2 == 0:
            amount += 1

    return amount

print(amount_even_numbers(10))
