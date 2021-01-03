/**
 *
 * Problem 5
 * Find the smallest positive number that is evenly divisible by all
 * of the numbers from 1 to 20
 * The answer is --------
 *
 * It is always open to improvement.
 * @author ismailgunayy
 *
 */

import java.util.LinkedHashMap;
import java.util.ArrayList;

public class Problem005 {

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

    public static void main(String[] ismailgunayy) {

        LinkedHashMap<Integer, Integer> primesDict = new LinkedHashMap<Integer, Integer>();
        ArrayList<Integer> primesList = new ArrayList<Integer>();

        for (int i = 2; i <= 20; i++) {
            if (isPrime(i)) {
                primesDict.put(i, 0);
                primesList.add(i);
            }
        }

        System.out.println(primesDict);
        System.out.println(primesList);

        int product = 1;

        for (int i = 2; i <= 20; i++) {
            for (int number : primesDict.keySet()) {
                // if ()
            }

        }
        System.out.println(product);
    }
}
