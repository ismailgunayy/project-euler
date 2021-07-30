"""
Created by İsmail GÜNAY

Start Date: 21:10 / 17.01.2020

Break 1: 22:15 / 17.01.2020

End Date:  ------------

ProjectEuler Problem5

Smallest positive number that is evenly divisible by all of the numbers from 1 to n
"""

def func(n):
    
    multipleList = [2]
    
    for i in range(3, n + 1):
        for j in multipleList:
            if (i in multipleList) or (i % j == 0):
                break
            else:
                multipleList.append(i)
   
    print(multipleList)
     
    number = 1        
        
    for k in multipleList:
        number = number * k

    return number

print(func(20))