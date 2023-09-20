
// Question:
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// Constraints:
// -100 <= arr[i][j] <= 100

// Example:
// Matrix:
// 11 2 4
// 4 5 6
// 10 8 -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15

function diagonalDifference(n, arr) {
    let i, j;
    let diagonal_left_rigth = 0;
    let diagonal_right_left = 0;

    for(i = 0; i < n; i++){
        diagonal_left_rigth += arr[i][i];
    }
    i = 0;
    for(j = (n - 1); j >= 0; j--) {
        diagonal_right_left += arr[i][j];
        i++;
    }   

    let result = Math.abs(diagonal_left_rigth - diagonal_right_left)
    return result
}

function main() {

    // Sample input
    const n = 3;

    // Sample input
    const arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12],];

    console.log(diagonalDifference(n, arr))

}

main()
// Sample output
// 15