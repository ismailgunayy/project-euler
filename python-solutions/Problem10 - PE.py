"""
Created by İsmail GÜNAY

Start Date: 15:20 / 18.01.2020

End Date: 15:31 / 18.01.2020

ProjectEuler Problem10

The sum of all the primes below two million
"""

def is_prime(n):
    
    for i in range(2, round((n**0.5) + 1)):
        if n % i == 0:
            return False
    
    return True

sum = 0

for j in range(2, 2000000):
    
    if is_prime(j) == True:
        print(j)
        sum += j
        
print(sum)