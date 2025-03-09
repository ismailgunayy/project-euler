import { measurePerformance, logResults } from '../metrics/performance';

/**
 * Problem 10: Sum of all prime numbers below 2,000,000
 * Optimisation steps:
 * 1 - In isPrime function, increase the iterator by 2 every step, since every even numbers have '2' in them.
 * 2 - Used Sieve of Eratosthenes method, which mark all the multiples of a number in the array since they are certainly not prime numbers.
 */
export default function solve(): number {
	const LIMIT = 2000000;
	const sieve = new Array(LIMIT).fill(true);

	sieve[0] = sieve[1] = false;

	for (let i = 2; i * i < LIMIT; i++) {
		if (sieve[i]) {
			for (let j = i * i; j < LIMIT; j += i) {
				sieve[j] = false;
			}
		}
	}

	let sum = 0;

	for (let i = 2; i < LIMIT; i++) {
		if (sieve[i]) {
			sum += i;
		}
	}

	return sum;
}

if (require.main === module) {
	const metrics = measurePerformance(solve);

	logResults(10, metrics);
}
