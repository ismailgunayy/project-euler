import { measurePerformance, logResults } from '../metrics/performance';

/**
 * Problem 1: Sum of multiples of 3 or 5 below 1000
 */
function solve(): number {
  let sum = 0;

  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

if (require.main === module) {
  const metrics = measurePerformance(solve);

  logResults(1, metrics);
}
