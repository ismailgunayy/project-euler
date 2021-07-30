"""
Created by İsmail GÜNAY

Start Date: 15:08 / 18.01.2020

End Date: 15:11 / 18.01.2020

ProjectEuler Problem20

The sum of the digits in the number 100!
"""

def fact(n):
    if n == 1:
        return 1
    
    else: 
        return n * fact(n - 1)
    
num = fact(100)

print(num)

numbers = list()

for i in str(num):
    numbers.append(int(i))
    
sumOfDigits = sum(numbers)

print(sumOfDigits)
    