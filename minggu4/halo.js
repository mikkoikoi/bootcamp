// let arr = [2, 1, 3, 5, 6, 9]; 
let arr2 = [4, 3, 5, 8, 1, 7];

function insertionSort(arr2) {
let n = arr2.length
let i, key, j
for (i = 1; i <  n; i++) {
    key=arr2[i]
    j = i-1
    while (j >= 0 && arr2[j] > key) {
        arr2[j+1] = arr2[j]
        j = j-1
    }
    arr2[j+1] = key
    }
    return arr2
}
const cuy = insertionSort(arr2)
console.log(cuy)
// console.log(arr)
