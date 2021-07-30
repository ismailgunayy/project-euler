"""
Created by İsmail GÜNAY

Start Date: 15:12 / 18.01.2020

End Date: 15:14 / 18.01.2020

ProjectEuler Problem16

The sum of the digits of the number 2^1000
"""

power = pow(2,1000)

numbers = list()

for i in str(power):
    numbers.append(int(i))
    
sumOfDigits = sum(numbers)

print(sumOfDigits)