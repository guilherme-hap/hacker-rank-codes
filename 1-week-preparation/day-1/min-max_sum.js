 
// Question:
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Constraints
// 1 <= arr[i] <= 10^9

function miniMaxSum(arr) {

    arr.sort(function(a, b) {return a - b})
    
    let i;
    let min = 0;
    let max = 0;

    for(i = 0; i < (arr.length - 1); i++) {
        if(arr[i] >= 1 && arr[i] <= 10^9) {
            min += arr[i];   
        }
    }
    for(i = 1; i < arr.length; i++) {
        if(arr[i] >= 1 && arr[i] <= 10^9) {
            max += arr[i];   
        }
    }

    console.log(min, max);

}

function main() {

    // Sample input:
    const arr = [1, 2, 3, 4, 5]

    miniMaxSum(arr)

}

// Sample output:
// 10 14
main()