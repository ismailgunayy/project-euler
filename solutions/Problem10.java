/**
 *
 * Problem 10
 * Find the sum of all the primes below two million.
 * The answer is 142913828922
 *
 * It is always open to improvement.
 * @author ismailgunayy
 *
 */

public class Problem10 {

    public static boolean isPrime(double number) {

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

    public static void main(String[] ismailgunayy) {

        double sum = 0;

        for (double number = 2; number < 2000000; number++) {
            if (isPrime(number)) {
                sum += number;
            }
        }

        System.out.printf("%.0f\n", sum);


    }
}
