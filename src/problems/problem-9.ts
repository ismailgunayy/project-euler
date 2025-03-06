import { measurePerformance, logResults } from '../metrics/performance';

/**
 * Problem 9: Find the product of a * b * c, in which a^2 + b^2 = c^2 and a + b + c = 1000
 */
export default function solve(): number {
	const limit = 1000;

	for (let i = 0; i < limit / 3; i++) {
		for (let j = i; j < (limit - i) / 2; j++) {
			for (let k = j; k < limit / 2; k++) {
				if (i + j + k === limit && i ** 2 + j ** 2 === k ** 2) {
					return i * j * k;
				}
			}
		}
	}

	return 0;
}

if (require.main === module) {
	const metrics = measurePerformance(solve);

	logResults(9, metrics);
}
