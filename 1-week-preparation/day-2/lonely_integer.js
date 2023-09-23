

// Question:
// Given an array of integers, where all elements but one occur twice, find the unique element.

// Constraints:
// 1 <= n < 100
// It is guaranteed that  is an odd number and that there is one unique element.
// 0 <= a[i] <= 100, where 0 <= i < n

function lonelyinteger(a) {
    return a.filter(i => a.filter(j => j === i).length === 1)[0];
}

function main() {

    // Sample input
    a = [0, 0, 1, 2, 1];

    console.log(lonelyinteger(a));

}

main()
// Sample output
// 2