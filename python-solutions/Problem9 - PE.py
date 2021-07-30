"""
Created by İsmail GÜNAY

Start Date: 14:52 / 18.01.2020

Break 1: 15:06 / 18.01.2020

End Date: --------

ProjectEuler Problem9

Product of Pythagorean triplet for which a + b + c = 1000 (a*b*c)
"""

for c in range(3, 1000):
    for b in range(1, c):
        for a in range(1, b):
            print("A: ", a, "B: ", b, "C: ", c)
            sum = a + b + c
            if (sum == 1000) and (a**2 + b**2 == c**2):
                print(a*b*c)
                break