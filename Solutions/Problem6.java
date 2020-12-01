/**
 *
 * Problem 6
 * Find the difference between the sum of the squares of the first one hundred
 * natural numbers and square of the sum
 * The answer is 25164150
 *
 * It is always open to improvement
 * @author ismailgunayy
 *
 */

public class Problem6 {
	
	public static int sumOfTheSquares(int toNumber) {
		int sum = 0;
		for (int number = 1; number <= toNumber; number++) {
			sum += Math.pow(number, 2);
		}
		return sum;
	}

	public static int squareOfTheSum(int toNumber) {
		int sum = 0;
		for (int number = 1; number <= toNumber; number++) {
			sum += number;
		}
		sum *= sum;
		return sum;
	}

	public static void main(String[] ismailgunayy) {
	
		int toNumber = 100;
		System.out.println(squareOfTheSum(toNumber) - sumOfTheSquares(toNumber));

	}
}
