let arr = [4, 5, 7, 2, 3, 6, 13, 15, 2, 21]

function arrBaru () {
    let arr2 = []
    for (let angka of arr) {
        if(angka % 3 === 0) {
           arr2.push(angka)
        }
    }
    console.log(arr2)
}
arrBaru()