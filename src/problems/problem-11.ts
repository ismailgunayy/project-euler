import { measurePerformance, logResults } from '../metrics/performance';
import { gridForProblem11 as grid } from './data/problem-11.data';

/**
 * Problem 11: Find the greatest product of four adjacent numbers
 * in the same direction (up, down, left, right, or diagonally) in a grid
 * which satisfies the grid.length = grid[n].length constraint (square)
 */
export default function solve(): number {
	function leftToRight(row: number, col: number) {
		if (col > 16) {
			return 0;
		}

		return (
			grid[row][col] *
			grid[row][col + 1] *
			grid[row][col + 2] *
			grid[row][col + 3]
		);
	}

	function topToBottom(row: number, col: number) {
		if (row > 16) {
			return 0;
		}

		return (
			grid[row][col] *
			grid[row + 1][col] *
			grid[row + 2][col] *
			grid[row + 3][col]
		);
	}

	function diagonalMain(row: number, col: number) {
		if (row > 16 || col > 16) {
			return 0;
		}

		return (
			grid[row][col] *
			grid[row + 1][col + 1] *
			grid[row + 2][col + 2] *
			grid[row + 3][col + 3]
		);
	}

	function diagonalAnti(row: number, col: number) {
		if (row > 16 || col < 3) {
			return 0;
		}

		return (
			grid[row][col] *
			grid[row + 1][col - 1] *
			grid[row + 2][col - 2] *
			grid[row + 3][col - 3]
		);
	}

	let maxProduct = 1;

	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid.length; col++) {
			let max = Math.max(
				leftToRight(row, col),
				topToBottom(row, col),
				diagonalMain(row, col),
				diagonalAnti(row, col),
			);

			if (max > maxProduct) {
				maxProduct = max;
			}
		}
	}

	return maxProduct;
}

if (require.main === module) {
	const metrics = measurePerformance(solve);

	logResults(11, metrics);
}
