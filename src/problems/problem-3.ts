import { measurePerformance, logResults } from '../metrics/performance';

/**
 * Problem 3: Largest prime factor of the number 600.851.475.143
 */
function solve(): number {
  const primeNumbers: number[] = [];

  function isPrime(n: number) {
    if (n === 2) return true;

    for (const primeNum of primeNumbers) {
      if (n % primeNum === 0) return false;
    }

    return true;
  }

  function findLargestPrimeFactorOfNumber(num: number) {
    let counter = 1;
    let biggestPrimeFactor = 1;

    while (true) {
      counter++;

      if (isPrime(counter)) {
        primeNumbers.push(counter);
      } else continue;

      if (num % counter === 0) {
        biggestPrimeFactor = counter;
        num /= counter;
      }

      if (num === 1) break;
    }

    return biggestPrimeFactor;
  }

  return findLargestPrimeFactorOfNumber(600851475143);
}

if (require.main === module) {
  const metrics = measurePerformance(solve);

  logResults(3, metrics);
}
