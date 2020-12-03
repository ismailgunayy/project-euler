/**
 *
 * Problem 8
 * Find the thirteen adjacent digits in the given
 * 1000-digit number that have the greatest product
 * The answer is 23514624000
 *
 * It is always open to improvement
 * @author ismailgunayy
 *
 */

import java.util.Scanner;
import java.io.File;
import java.io.FileNotFoundException;

public class Problem8 {

    public static String readNumberStringFromFile() {
        try {
            Scanner reader = new Scanner(new File("requiredFiles/Problem8_Number.txt"));
            String number = "";

            while (reader.hasNextLine()) {
                number += reader.nextLine();
            }

            return number;
        }
        catch (FileNotFoundException f) {
            f.printStackTrace();
            return "";
        }
    }

    public static void main(String[] ismailgunayy) {

        String numText = readNumberStringFromFile();

        double maxProduct = 0;
        double tempProduct = 1;

        for (int index = 0; index < numText.length() - 12; index++) {
            for (int index2 = index; index2 < index + 13; index2++) {
                tempProduct *= Character.getNumericValue(numText.charAt(index2));
            }
            if (tempProduct > maxProduct) maxProduct = tempProduct;
            tempProduct = 1;
        }

        System.out.printf("%.0f", maxProduct);
    }
}
