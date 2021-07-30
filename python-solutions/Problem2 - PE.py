"""
Created by İsmail GÜNAY

Start Date: 12:50 / 17.01.2020

End Date: 12:59 / 17.01.2020

ProjectEuler Problem2

The sum of even numbers in fibonacci sequence until a limit
"""

def fib(n):
	
	if n == 0:
		return n
	elif n == 1:
		return n
	else:
		return fib(n - 1) + fib(n - 2)
	
evenFibs = list()

for i in range(34):
	if fib(i) % 2 == 0:
		evenFibs.append(fib(i))
		
sum = sum(evenFibs)

print(sum)