/**
 *
 * Problem 7
 * What is the 10001st prime number?
 * The Answer is 104743
 *
 * It is always open to improvement
 * @author ismailgunayy
 */

public class Problem007 {

	public static boolean isPrime(int number) {
		if (number == 0 || number == 1)
			return false;

		if (number == 2)
			return true;

		else if (number % 2 == 0)
			return false;

		else {
			for (int divisor = 2; divisor <= Math.sqrt(number); divisor++) {
				if (number % divisor == 0)
					return false;
			}
			return true;
		}
	}

	public static int nthPrime(int n) {

		int count = 0;
		int number = 2;
		while (true) {
			if (isPrime(number)) {
				count += 1;
			}
			if (count == 10001) break;
			number += 1;
		}
		return number;
	}

	public static void main(String[] ismailgunayy) {

		System.out.println(nthPrime(10001));

	}
}
