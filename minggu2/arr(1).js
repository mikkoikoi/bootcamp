let buah = ["semangka", "apel", "jambu", "lemon", "melon"]
// buah[2] = "durian"
console.log(buah)
// buah.push("rambutan", "apel")
// console.log(buah)
// buah.pop()
// console.log(buah)
// buah.splice(1, 2) 
// console.log(buah)
// buah.shift()
// console.log(buah)

// let array2 = buah.slice(0,1)
// console.log(buah)
// console.log(array2)
// buah.splice(2,2, "KESEMEK")
// console.log(buah)

// for(let index in buah) {
//     console.log(index)
// }

// for(let element of buah) {
//     console.log(element)
// }
delete buah[1];
delete buah[buah.length - 1];
console.log(buah)