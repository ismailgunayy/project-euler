import { measurePerformance, logResults } from '../metrics/performance';

/**
 * Problem 9: Find the product of a * b * c, in which a^2 + b^2 = c^2 and a + b + c = 1000
 */
export default function solve(): number {
	const PERIMETER = 1000;

	for (let i = 0; i < PERIMETER / 3; i++) {
		for (let j = i; j < (PERIMETER - i) / 2; j++) {
			const k = PERIMETER - i - j;

			if (i ** 2 + j ** 2 === k ** 2) {
				return i * j * k;
			}
		}
	}

	return 0;
}

if (require.main === module) {
	const metrics = measurePerformance(solve);

	logResults(9, metrics);
}
