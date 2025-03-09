import { measurePerformance, logResults } from '../metrics/performance';

/**
 * Problem 10: Sum of all prime numbers below 2,000,000
 * Optimisation steps:
 * 1 - In isPrime function, increase the iterator by 2 every step, since every even numbers have '2' in them.
 */
export default function solve(): number {
	function isPrime(number: number): boolean {
		if (number === 2) return true;

		for (let i = 3; i <= Math.sqrt(number); i += 2) {
			if (number % i === 0) {
				return false;
			}
		}

		return true;
	}

	const LIMIT = 2000000;
	let sum = 2; // Starts with 2

	for (let i = 3; i < LIMIT; i += 2) {
		if (isPrime(i)) {
			sum += i;
		}
	}

	return sum;
}

if (require.main === module) {
	const metrics = measurePerformance(solve);

	logResults(10, metrics);
}
