import { measurePerformance, logResults } from '../metrics/performance';

/**
 * Problem 2: Sum of even-valued fibonacci numbers below 4.000.000
 */
function solve(): number {
  function isEven(n: number) {
    return n % 2 === 0;
  }

  function sumOfEvenValuedFibonacciNumbers(
    threshold: number,
    condition: (n: number) => boolean,
  ) {
    let sum = 0,
      num1 = 1, // 1st fib
      num2 = 1; // 2nd fib

    while (num2 < threshold) {
      if (condition(num2)) {
        sum += num2;
      }

      num2 = num2 + num1;
      num1 = num2 - num1;
    }

    return sum;
  }

  return sumOfEvenValuedFibonacciNumbers(4000000, isEven);
}

if (require.main === module) {
  const metrics = measurePerformance(solve);

  logResults(2, metrics);
}
