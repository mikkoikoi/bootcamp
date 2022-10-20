const sum = (a,b) => {
   return a + b;
}

const square = (s) => {
    return s * s
}

const circle = (r) => {
    return 3.14 * r * r
}

const pangkat = (a, b) => {
    return a**b
}
const bagi = (a, b) => {
    return a / b
}


// module.exports = {
//     pangkat,
//     bagi
// }
    

    exports.kotak = square
    exports.lingkaran = circle
    exports.penjumlahan = sum