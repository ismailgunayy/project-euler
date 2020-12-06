import java.math.BigInteger;

/**
 *
 * Problem 16
 * Find the sum of the digits of the number 21000?
 * The answer is 1366
 *
 * It is always open to improvement
 * @author ismailgunayy
 *
 */

public class Problem016 {

    public static int sumOfDigits(String numberString) {
        int sumOfDigits = 0;
        for (int index = 0; index < numberString.length(); index++) {
            sumOfDigits += Character.getNumericValue(numberString.charAt(index));
        }
        return sumOfDigits;
    }

    public static void main(String[] ismailgunayy) {

        BigInteger number = BigInteger.valueOf(2);
        number = number.pow(1000);

        System.out.println(sumOfDigits(number.toString()));

    }
}
