import { measurePerformance, logResults } from '../metrics/performance';

/**
 * Problem 9: Find the product of a * b * c, in which a^2 + b^2 = c^2 and a + b + c = 1000
 *
 * Optimisation steps:
 * 1 - Since the numbers are sum up to 1000, there is no need to loop for c. It has to be PERIMETER - a - b.
 * 2 - Start b from a + 1, and use a * a instead of a ** 2 since it brings an overhead
 */
export default function solve(): number {
	const PERIMETER = 1000;

	for (let a = 0; a < PERIMETER / 3; a++) {
		for (let b = a + 1; b < (PERIMETER - a) / 2; b++) {
			const c = PERIMETER - a - b;

			if (a * a + b * b === c * c) {
				return a * b * c;
			}
		}
	}

	return 0;
}

if (require.main === module) {
	const metrics = measurePerformance(solve);

	logResults(9, metrics);
}
