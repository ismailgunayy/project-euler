import { measurePerformance, logResults } from '../metrics/performance';

/**
 * Problem 8: Find the thirteen adjacent digits in the
 * 1000-digit number that have the greatest product.
 *
 * Optimisation steps:
 * 1 - If there is a 0 in the adjacent digits of the serie, skip seriesLength steps
 * 2 - If product, and the digits before and after the series are not 0, divide the product by the last digit before the series and multiply it by the next digit after the series
 */
export default function solve(): number {
	const number =
		BigInt(
			7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450n,
		);

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
