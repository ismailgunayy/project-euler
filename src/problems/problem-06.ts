import { measurePerformance, logResults } from '../metrics/performance';

/**
 * Problem 6: The difference between
 * the sum of the squares and
 * the square of the sum
 * of the first one hundred natural numbers
 */
export default function solve(): number {
	function squareOfTheSum(num: number) {
		const sum = (num * (num + 1)) / 2;
		return sum ** 2;
	}

	function sumOfTheSquares(num: number) {
		return (num * (num + 1) * (2 * num + 1)) / 6;
	}

	const number = 100;
	return squareOfTheSum(number) - sumOfTheSquares(number);
}

if (require.main === module) {
	const metrics = measurePerformance(solve);

	logResults(6, metrics);
}
