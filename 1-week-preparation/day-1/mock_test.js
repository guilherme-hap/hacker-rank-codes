
// Question:
// The median of a list of numbers is essentially its middle element after sorting. 
// The same number of elements occur after it as before. Given a list of numbers with an odd number of elements, find the median

// Constraints
// 1 <= n <= 1000001
// n is odd
// -10000 <= arr[i] <= 10000

function findMedian(arr, n) {
    let middle = (n/2)

    arr.sort(function(a, b) {return a - b})

    if(arr[middle.toFixed(0) - 1] >= -10000 && arr[middle.toFixed(0) - 1] <= 10000) {
        return arr[middle.toFixed(0) - 1]
    }
}

function main() {

    // Sample input:
    const arr = [0, 1, 2, 4, 6, 5, 3] 

    const n = arr.length

    if(n % 2 != 0 && n >= 1 && n <= 1000001) {
        console.log(findMedian(arr, n))    
    }

}

main()
// Sample output:
// 3