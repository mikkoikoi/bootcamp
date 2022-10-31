// do

//   swapped = false

//   for i = 1 to indexOfLastUnsortedElement-1

//     if leftElement > rightElement

//       swap(leftElement, rightElement)

//       swapped = true; ++swapCounter

// while swapped


let bubbleSort = (arr) => {
let leng = arr.length
let swapped
do {
    swapped = false
    for (i = 1 ; i < leng -1; i++ ) {
        if(arr[i] > arr[i + 1]) {
            let tmp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = tmp
            swapped = true
        }
    }
    } while(swapped) 
    return arr
}

let arr = [8, 2, 4, 10, 9, 1]

console.log(bubbleSort(arr))