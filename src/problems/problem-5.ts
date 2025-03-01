import { measurePerformance, logResults } from '../metrics/performance';

/**
 * Problem 5: Smallest positive number that is divisible by all numbers from 1 to 20
 */
export default function solve(): number {
	type TPowersOfFactors = { [key: string]: number };

	function findPrimeFactors(num: number): TPowersOfFactors {
		const factorsOfNum: TPowersOfFactors = {};
		let factor = 2;

		while (num !== 1) {
			if (num % factor === 0) {
				if (factorsOfNum[factor]) factorsOfNum[factor]++;
				else factorsOfNum[factor] = 1;

				num /= factor;
			} else factor += factor === 2 ? 1 : 2;
		}

		return factorsOfNum;
	}

	const powersOfFactors: TPowersOfFactors = {};

	for (let i = 20; i > 1; i--) {
		const result = findPrimeFactors(i);

		Object.keys(result).forEach((factor: string) => {
			if (powersOfFactors[factor]) {
				if (powersOfFactors[factor] < result[factor]) {
					powersOfFactors[factor] = result[factor];
				}
			} else {
				powersOfFactors[factor] = result[factor];
			}
		});
	}

	let result = 1;

	for (let factor in powersOfFactors) {
		const factorNum = Number(factor);

		result *= factorNum ** powersOfFactors[factor];
	}

	return result;
}

if (require.main === module) {
	const metrics = measurePerformance(solve);

	logResults(5, metrics);
}
