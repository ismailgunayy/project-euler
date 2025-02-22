import { measurePerformance, logResults } from '../metrics/performance';

/**
 * Problem 2: Sum of even-valued fibonacci numbers below 4.000.000
 *
 * Learned that if n >= 3 and fib(n) is even;
 * fib (n + 3) = 4 * fib(n) + fib(n - 3)
 */
function solve(): number {
  function sumOfEvenValuedFibonacciNumbers(threshold: number) {
    let sum = 0,
      current = 2, // starting from fib(3) which is the first even number
      previous = 0;

    while (current < threshold) {
      sum += current;

      const next = 4 * current + previous;
      previous = current;
      current = next;
    }

    return sum;
  }

  return sumOfEvenValuedFibonacciNumbers(4000000);
}

if (require.main === module) {
  const metrics = measurePerformance(solve);

  logResults(2, metrics);
}
