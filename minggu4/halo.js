let arr = [2, 1, 3, 5, 6, 9]; 

function insertionSort(arr) {
let n = arr.length
let i, key, j
for (i = 1; i <  n; i++) {
    key=arr[i]
    j = i-1
    while (j >= 0 && arr[j] > key) {
        arr[j+1] = arr[j]
        j = j-1
    }
    arr[j+1] = key
    }
    console.log(arr)
}
insertionSort(arr)