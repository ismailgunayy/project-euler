"""
Created by İsmail GÜNAY

Start Date: 13:54 / 18.01.2020

End Date: 14:33 / 18.01.2020

ProjectEuler Problem7

The 10001st prime number
"""

def is_prime(n):
    
    for i in range(2, n):
        if n % i == 0:
            return False
    
    return True

def nth_prime(n):
    
    count = 1
    j = 2
    
    while True:
        if is_prime(j) == True:
            print(j, count)
            if count == n:
                return j
            count += 1
        
        
        j += 1
        
        
print(nth_prime(10001))