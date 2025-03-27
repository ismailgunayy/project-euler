import { measurePerformance, logResults } from '../metrics/performance';
import { numberForProblem08 as number } from './data/problem-08.data';

/**
 * Problem 8: Find the thirteen adjacent digits in the
 * 1000-digit number that have the greatest product.
 *
 * Optimisation steps:
 * 1 - If there is a 0 in the adjacent digits of the serie, skip seriesLength steps
 * 2 - If product, and the digits before and after the series are not 0, divide the product by the last digit before the series and multiply it by the next digit after the series
 */
export default function solve(): number {
	function findProductOfAdjacentDigits(
		numStr: string,
		startIndex: number,
		seriesLength: number,
	) {
		let product = 1;

		for (let i = 0; i < seriesLength; i++) {
			product *= Number(numStr[startIndex + i]);

			if (product === 0) return 0;
		}

		return product;
	}

	const numStr = number.toString();
	const seriesLength = 13;
	let largestProduct = 1;
	let product = -1;

	for (let i = 0; i <= numStr.length - seriesLength; ) {
		const digitBeforeSeries = Number(numStr[i - 1]);
		const digitAfterSeries = Number(numStr[i + seriesLength - 1]);

		if (product > 0 && digitBeforeSeries !== 0 && digitAfterSeries !== 0) {
			// No need to calculate the product again, just divide by last digit and multiply by next digit
			product = (product / digitBeforeSeries) * digitAfterSeries;
		} else {
			product = findProductOfAdjacentDigits(numStr, i, seriesLength);
		}

		if (product > largestProduct) {
			largestProduct = product;
		}

		if (product === 0) {
			i += seriesLength; // If there is a 0 in the seriesLength, skip seriesLength steps
		} else {
			i++;
		}
	}

	return largestProduct;
}

if (require.main === module) {
	const metrics = measurePerformance(solve);

	logResults(8, metrics);
}
