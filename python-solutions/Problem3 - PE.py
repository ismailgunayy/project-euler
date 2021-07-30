"""
Created by İsmail GÜNAY

Start Date: 19:17 / 17.01.2020

Break 1: 20:34 / 17.01.2020

End Date:  ------------

ProjectEuler Problem3

Largest prime factor of a number
"""

#def isPrime(n):
#    
#    if n % 2 == 0:
#        return False
#    
#    else:
#        for i in range(2, n):
#            if i % 2 == 0:
#                continue
#            
#            elif n % i == 0:
#                return False
#        
#        return True
#
#def max_prime_factor(n):
#    
#    maxPrimeFactor = 0
#    
#    for j in range(round(600851475143 ** 0.5), 2, -1):
#        if isPrime(j) == True:
#            if n % j == 0:
#                maxPrimeFactor = j
#                return maxPrimeFactor
#        print(j)
#            
#    return maxPrimeFactor
#
#result = max_prime_factor(600851475143)
#
#print(result)
