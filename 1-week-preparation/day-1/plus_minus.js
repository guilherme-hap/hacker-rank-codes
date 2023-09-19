
// Question:
// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
// Print the decimal value of each fraction on a new line with  places after the decimal.

// Constraints:
// 0 < n <= 100
// -100 <= arr[i] <= 100

function plusMinus(arr, n) {
    let i, positive, negative, zero;
    positive = 0;
    negative = 0;
    zero = 0;
    if(n > 0 && n <= 100) {
        for(i = 0; i < n; i++) {
            if(arr[i] >= -100 && arr[i] <= 100) {
                if(arr[i] < 0) {
                    negative++;
                } else if(arr[i] > 0) {
                    positive++;
                } else {
                    zero++;
                }
            }
        }
    }
    console.log((positive/n).toFixed(6));
    console.log((negative/n).toFixed(6));
    console.log((zero/n).toFixed(6));
}

function main() {
    // Sample input:
    const arr = [-4, 3, -9, 0, 4, 1]

    const n = arr.length
    
    plusMinus(arr, n);
    
}

// Sample output:
// 0.500000
// 0.333333
// 0.166667
main()