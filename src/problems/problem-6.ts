import { measurePerformance, logResults } from '../metrics/performance';

/**
 * Problem 6: The difference between
 * the sum of the squares and
 * the square of the sum
 * of the first one hundred natural numbers
 */
export default function solve(): number {
	let sum = 0;
	let sumOfSquares = 0;

	for (let i = 1; i <= 100; i++) {
		sum += i;
		sumOfSquares += i ** 2;
	}

	const squareOfSum = sum ** 2;

	return squareOfSum - sumOfSquares;
}

if (require.main === module) {
	const metrics = measurePerformance(solve);

	logResults(6, metrics);
}
