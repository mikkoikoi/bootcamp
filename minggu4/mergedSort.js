let arr = [6, 8, 9, 2, 3, 16]

function mergeSort (arr) {
    let p, q ,r, i, j, k
    
    let n1 = q - p + 1
    let n2 = r - q
    let L = [n1]
    let R = [n2]
    for (i = 0; i < n1; i++){
        L[i] = arr[p + i];
        for (j = 0; j < n2; j++){
            R[j] = arr[m + 1 + j];
        }
    }
    L[n1 + 1] = Infinity
    R[n2 + 1] = Infinity
    i = 1
    j = 1

    for (k = p ; k < r ; k++) {
        if (L[i] <= R[j]) {
            arr[k] = L[i]
            i = i + 1
        } else {
            arr[k] = R[j]
        }
        j = j + 1
    } 
    return arr
}

const halo = mergeSort(arr)
console.log(halo)