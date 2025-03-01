import { measurePerformance, logResults } from '../metrics/performance';

/**
 * Problem 3: Largest prime factor of the number 600.851.475.143
 */
export default function solve(): number {
	function findLargestPrimeFactorOfNumber(num: number) {
		let factor = 2;

		while (num !== 1) {
			if (num % factor === 0) {
				num /= factor;
			} else {
				factor += factor === 2 ? 1 : 2;
			}
		}

		return factor;
	}

	return findLargestPrimeFactorOfNumber(600851475143);
}

if (require.main === module) {
	const metrics = measurePerformance(solve);

	logResults(3, metrics);
}
