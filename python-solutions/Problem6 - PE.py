"""
Created by İsmail GÜNAY

Start Date: 13:39 / 18.01.2020

End Date:  13:52 / 18.01.2020

ProjectEuler Problem6

Difference between the sum of the squares of the first one hundred natural numbers and the square of the sum
"""

sumOfSquares = 1

def sum_of_squares(n):
    
    if n == 100:
        return 100 ** 2
    else:
        return n ** 2 + sum_of_squares(n + 1)
    

def squares_of_sum(n):
    
    if n == 100:
        return 100
    else:
        return n + squares_of_sum(n + 1)

a = (squares_of_sum(1)) ** 2

print(abs(sum_of_squares(1) - a))