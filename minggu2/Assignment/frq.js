
// let barang = ["Buku", "Pulpen", "Penggaris"]

// function posisi(i) {
//     for (let index in barang) {
//         if (i == barang[index]){
//             return index
//         }
//     }
// }

// console.log(posisi("Penggaris   "));


// // kalau di balik beginilah hasilnya

// function dimana(i) {
//     for (let index in barang) {
//         if (i == index){
//             return barang[index] + " => " + index;
//         }
//     }
// }

// console.log(dimana(1));

let items = ['buku', 'pensil', 'penggaris'];
let searchKey = 'penggarisa';

const findIndex = (array, searchKey) => {
    let indexFound = "eror";
    for (let i in array) {
        if (array[i] == searchKey) {
            indexFound = i;
        }
    }
    return indexFound;
}

console.log(findIndex(items, searchKey));

const findIndex2 = function (array, searchKey) {
    let indexFound = -1;
    for (let i in array) {
        if (array[i] == searchKey) {
            indexFound = i;
        }
    }
    return indexFound;
}

console.log(findIndex2(items, 'penggaris'));