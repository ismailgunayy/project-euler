import { measurePerformance, logResults } from '../metrics/performance';

/**
 * Problem 5: Smallest positive number that is divisible by all numbers from 1 to 20
 */
export default function solve(): number {
	type TPowersOfFactors = { [key: string]: number };

	function findPowersOfPrimeFactors(num: number): TPowersOfFactors {
		const result: TPowersOfFactors = {};
		let factor = 2;

		while (num !== 1) {
			if (num % factor === 0) {
				if (result[factor]) result[factor]++;
				else result[factor] = 1;

				num /= factor;
			} else {
				factor += factor === 2 ? 1 : 2;
			}
		}

		return result;
	}

	const powersOfPrimeFactors: TPowersOfFactors = {};

	for (let i = 20; i > 1; i--) {
		const result = findPowersOfPrimeFactors(i);

		Object.keys(result).forEach((factor: string) => {
			const object = powersOfPrimeFactors;

			if (object[factor]) {
				if (object[factor] < result[factor]) {
					object[factor] = result[factor];
				}
			} else {
				object[factor] = result[factor];
			}
		});
	}

	let smallestPositive = 1;

	for (let factor in powersOfPrimeFactors) {
		const factorNum = Number(factor);

		smallestPositive *= factorNum ** powersOfPrimeFactors[factor];
	}

	return smallestPositive;
}

if (require.main === module) {
	const metrics = measurePerformance(solve);

	logResults(5, metrics);
}
