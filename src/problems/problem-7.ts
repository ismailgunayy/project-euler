import { measurePerformance, logResults } from '../metrics/performance';

/**
 * Problem 7: 10001st prime number
 */
export default function solve(): number {
	function isPrime(number: number) {
		for (let i = 2; i <= Math.sqrt(number); i++) {
			if (number % i === 0) return false;
		}

		return true;
	}

	let result;
	const whichNumber = 10001;

	// Start with 3 which is the 2nd prime number
	for (let i = 3, order = 1; ; i += 2) {
		if (isPrime(i)) {
			order++;

			if (order === whichNumber) {
				result = i;
				break;
			}
		}
	}

	return result;
}

if (require.main === module) {
	const metrics = measurePerformance(solve);

	logResults(7, metrics);
}
