// binarySearch(arr, item, beg, end)
//     if beg<=end
//         midIndex = (beg + end) / 2 
//         if item == arr[midIndex]
//             return midIndex
//         else if item > arr[midIndex]        
//             return binarySearch(arr, item, midIndex + 1, end)
//         else                              
//             return binarySearch(arr, item, beg, midIndex - 1)
    
//     return -1


const binarySearch = (arr, item, beg, end) => {
    if (beg <= end) {
        let midIndex = Math.floor((beg + end) / 2)
        if (item === arr[midIndex]) {
            return midIndex
        } else if (item > arr[midIndex]) {
            return binarySearch(arr, item, midIndex +1, end)
        } else {
            return binarySearch(arr, item, beg, midIndex -1)
        }
    }
    return -1
}

const data = [1,2,3,4,5,7,8,9,10]
const angka = 5

console.log(binarySearch(data, angka, 0, data.length-1))