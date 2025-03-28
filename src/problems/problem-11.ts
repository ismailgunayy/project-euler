import { measurePerformance, logResults } from '../metrics/performance';
import { gridForProblem11 as grid } from './data/problem-11.data';

/**
 * Problem 11: Find the greatest product of four adjacent numbers
 * in the same direction (up, down, left, right, or diagonally) in a grid
 * which satisfies the grid.length = grid[n].length constraint (square)
 *
 * Optimisation steps:
 * 1 - Functions create so much overhead.
 * In terms of readability and modularity, they are surely a good choice.
 * However, in terms of performance, it's way better to do the operation right on the spot instead of creating and calling a separate function.
 */
export default function solve(): number {
	const GRID_SIZE = grid.length;
	const ADJACENT_SIZE = 4;

	let maxProduct = 1;

	for (let row = 0; row < GRID_SIZE; row++) {
		for (let col = 0; col < GRID_SIZE; col++) {
			let products = [maxProduct];

			// Left to right
			if (col <= GRID_SIZE - ADJACENT_SIZE) {
				products.push(
					grid[row][col] *
						grid[row][col + 1] *
						grid[row][col + 2] *
						grid[row][col + 3],
				);
			}

			// Top to bottom
			if (row <= GRID_SIZE - ADJACENT_SIZE) {
				products.push(
					grid[row][col] *
						grid[row + 1][col] *
						grid[row + 2][col] *
						grid[row + 3][col],
				);
			}

			// Main diagonal
			if (
				row <= GRID_SIZE - ADJACENT_SIZE &&
				col <= GRID_SIZE - ADJACENT_SIZE
			) {
				products.push(
					grid[row][col] *
						grid[row + 1][col + 1] *
						grid[row + 2][col + 2] *
						grid[row + 3][col + 3],
				);
			}

			// Anti diagonal
			if (row <= GRID_SIZE - ADJACENT_SIZE && col >= 3) {
				products.push(
					grid[row][col] *
						grid[row + 1][col - 1] *
						grid[row + 2][col - 2] *
						grid[row + 3][col - 3],
				);
			}

			maxProduct = Math.max(...products);
		}
	}

	return maxProduct;
}

if (require.main === module) {
	const metrics = measurePerformance(solve);

	logResults(11, metrics);
}
