// partition (arr[], low, high)
// {
//     // pivot (Element to be placed at right position)
//     pivot = arr[high];  

//     i = (low – 1)  // Index of smaller element and indicates the 
//     // right position of pivot found so far

//     for (j = low; j <= high- 1; j++){

//         // If current element is smaller than the pivot
//         if (arr[j] < pivot){
//             i++;    // increment index of smaller element
//             swap arr[i] and arr[j]
//         }
//     }
//     swap arr[i + 1] and arr[high])
//     return (i + 1)
// }

const partition = (arr, low, high) => {
  const pivot = arr[high];
  let i = low - 1;
  
  for (let j = low; j <= high - 1; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

const quickSort = (arr, low, high) => {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSort(arr, low, pi-1);
    quickSort(arr, pi+1, high)
  }
}

let data = [2, 5, 4, 1, 6, 3];
quickSort(data, 0, data.length - 1);
console.log(data);