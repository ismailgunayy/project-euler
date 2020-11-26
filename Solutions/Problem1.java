/**
 *
 * Problem 1
 * Find the sum of all the multiples of 3 or 5 below 1000
 * The answer is 233168
 *
 * It is always open to improvement.
 * @author ismailgunayy
 *
 */

import java.util.ArrayList;

public class Problem1 {

	public static int sumOfArrList(ArrayList<Integer> arrList) {
		int sum = 0;
		for (int number : arrList) {
			sum += number;
		}
		return sum;
	}

	public static void main(String[] ismailgunayy) {
		
		ArrayList<Integer> multiples = new ArrayList<>();

		for (int number = 0; number < 1000; number++) {
			if (number % 3 == 0 || number % 5 == 0) {
				multiples.add(number);
			}
		}

		System.out.println(sumOfArrList(multiples));

	}
}
