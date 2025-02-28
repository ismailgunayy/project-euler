import { measurePerformance, logResults } from '../metrics/performance';

/**
 * Problem 4: Largest Palindrome Product of two 3-digit numbers
 */
function solve(): number {
  function isPalindrome(num: number): boolean {
    const numStr = num.toString();
    return numStr === numStr.split('').reverse().join('');
  }

  let largestPalindrome = 0;

  for (let i = 999; i >= 100; i--) {
    for (let j = 999; j >= 100; j--) {
      const product = i * j;

      if (product <= largestPalindrome) break;

      if (isPalindrome(product) && product) {
        largestPalindrome = product;
      }
    }
  }

  return largestPalindrome;
}

if (require.main === module) {
  const metrics = measurePerformance(solve);

  logResults(4, metrics);
}
