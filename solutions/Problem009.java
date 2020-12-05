/**
 *
 * Problem 9 There exists exactly one Pythagorean triplet for which a + b + c = 1000
 * Find the product abc
 * The answer is 31875000
 *
 * It is always open to improvement.
 * @author ismailgunayy
 *
 */

public class Problem009 {

    public static boolean isPythagorean(int a, int b, int c) {
        return Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2);
    }

    public static void main(String[] ismailgunayy) {

        for (int c = 333; c < 500; c++) {
            for (int b = 2; b < c; b++) {
                for (int a = 1; a < b; a++) {
                    if (a + b + c == 1000 && isPythagorean(a, b, c)) {
                            System.out.printf("Product = %d, a = %d, b = %d, c = %d\n", a * b * c, a, b, c);
                            break;
                    }
                }
            }
        }

    }
}
