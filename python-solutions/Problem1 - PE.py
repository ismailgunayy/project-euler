"""
Created by  İsmail GÜNAY

Start Date: 01:40 13.12.2019

End Date: 02:00 13.12.2019

ProjectEuler Problem1

The sum of all the multiples 3 or 5 below a limit
"""

def sumOfMultiplesOfThreeAndFive(limit):
	sum = 0
	for i in range(limit):
		if i % 3 == 0 or i % 5 == 0:
			sum += i
			
	return sum

print(sumOfMultiplesOfThreeAndFive(1000))