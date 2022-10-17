// let n = 15

// function operasi(n) {
//     for (let i = 1; i<=n ; i++) {
//         if (i % 2==0) {
//             console.log(i, " --> genap\n")
//         }
//         else 
//         {
//             console.log(i, " --> ganjil\n")
//         }
//     }
// }
// operasi(n)

function operasi (n) {
     if(n % 2 == 0 ) {
        console.log(n + " genap")
    } else{
        console.log(n + " ganjil")
    }
    if (n > 1){ 
       return operasi(n -1)
    }
}
console.log(operasi(10))