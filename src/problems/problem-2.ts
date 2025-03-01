import { measurePerformance, logResults } from '../metrics/performance';

/**
 * Problem 2: Sum of even-valued fibonacci numbers below 4.000.000
 *
 * Learned that if n >= 3 and fib(n) is even;
 * fib (n + 3) = 4 * fib(n) + fib(n - 3)
 */
export default function solve(): number {
	function sumOfEvenFibs(
		current: number,
		previous: number,
		threshold: number,
	): number {
		if (current >= threshold) return 0;
		return current + sumOfEvenFibs(4 * current + previous, current, threshold);
	}

	return sumOfEvenFibs(2, 0, 4000000);
}

if (require.main === module) {
	const metrics = measurePerformance(solve);

	logResults(2, metrics);
}
