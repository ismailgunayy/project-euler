"""
Created by İsmail GÜNAY

Start Date: 20:35 / 17.01.2020

End Date: 21:07 / 17.01.2020

ProjectEuler Problem4

Largest palindrome made from the product of two 3-digit numbers
"""

def checkPalindrome(n):
    numbers = list(str(n))
    
    numbers = numbers[::-1]
    
    if n == int("".join(numbers)):
        return True
    else:
        return False
    
largestPalindrome = 0  
    
for i in range(100, 1000):
    for j in range(100, 1000):
        if checkPalindrome(i * j) == True:
            if i * j > largestPalindrome:
                largestPalindrome = i * j
                print(i, j)

    
                
print(largestPalindrome)
                
