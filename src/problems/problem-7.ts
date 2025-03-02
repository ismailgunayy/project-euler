import { measurePerformance, logResults } from '../metrics/performance';

/**
 * Problem 7: 10001st prime number
 */
export default function solve(): number {
	function isPrime(number: number) {
		for (let i = 2; i < Math.floor(number / 2); i++) {
			if (number % i === 0) return false;
		}

		return true;
	}

	const whichNumber = 10001;
	let order = 2;
	let number = 3; // Starting from 3 which is the 2nd prime number

	while (order !== whichNumber) {
		number += 2;

		if (isPrime(number)) {
			order++;
		}
	}

	return number;
}

if (require.main === module) {
	const metrics = measurePerformance(solve);

	logResults(7, metrics);
}
