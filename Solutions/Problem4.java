/**
 *
 * Problem 4
 * Find the largest palindrome made from the product of two 3-digit numbers
 * The answer is 906609
 *
 * It is always open to improvement
 * @author ismailgunayy
 *
 */

public class Problem4{
	public static boolean isPalindrome(int number) {

		String numAsText = String.valueOf(number);
		for (int index = 0; index < numAsText.length(); index++) {
			if (numAsText.charAt(index) != numAsText.charAt(numAsText.length() - 1 - index)) {
				return false;
			}	
		}
		return true;
	}

	public static void main(String[] ismailgunayy){
	
		int largestPalindrome = 0;
		int tempNumber = 0;

		for (int number1 = 100; number1 < 1000; number1++) {
			for(int number2 = 100; number2 < 1000; number2++) {
				tempNumber = number1 * number2;
				if(isPalindrome(tempNumber) && tempNumber > largestPalindrome){
					largestPalindrome = tempNumber;
				}
			}
		}

		System.out.println(largestPalindrome);
	}
}
