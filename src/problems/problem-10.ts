import { measurePerformance, logResults } from '../metrics/performance';

/**
 * Problem 10: Sum of all prime numbers below 2,000,000
 */
export default function solve(): number {
	function isPrime(number: number): boolean {
		if (number === 2) return true;

		for (let i = 2; i <= Math.sqrt(number); i++) {
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
