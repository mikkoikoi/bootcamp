let baris = 5
let bintang = ""
for(let i = 0; i <= baris; i++) {
    for(let j = 0; j < baris + i; j++) {
        bintang += ""
    }
    for(let k = 0; k < i; k++) {
        bintang += "*"
    }
    bintang += "\n"
}
console.log(bintang)