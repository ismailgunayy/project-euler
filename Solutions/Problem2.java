/**
 *
 * Problem 2
 * By considering the terms in Fibonacci sequemce
 * whose values do note exceed four million, find te sum of the even valued terms
 * The answer is 4613732
 *
 * It is always open to improvement
 * @author ismailgunayy
 *
 */

import java.util.ArrayList;

public class Problem2{

	public static int fib(int n) {
		if (n <= 1) {
			return 1;
		} else {
			return fib(n - 1) + fib(n - 2);
		}
	}

	public static int sumOfArrList(ArrayList<Integer> arrList) {
		int sum = 0;
		for (int number : arrList) {
			sum += number;
		}
		return sum;
	}

	public static boolean isEven(int number){
		if (number % 2 == 0) {
			return true;
		}
		return false;
	}

	public static void main(String[] ismailgunayy){

		ArrayList<Integer> evens = new ArrayList<>();

		int fibCount = 0;
		int tempFib;

		while (true) {

			tempFib = fib(fibCount);

			if (tempFib >= (4 * Math.pow(10, 6))) {
			       break;
			}

			if (isEven(fib(fibCount))){
				evens.add(tempFib);
			}

			fibCount++;

		}

		System.out.println(sumOfArrList(evens));
	}
}
