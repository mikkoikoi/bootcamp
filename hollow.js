let baris = 5
let bintang = "";

for(let i = 0; i < baris; i++) {
    for(let j = 0; j < baris; j++) {
        if(i === 0 || i === baris - 1) {
            bintang += "*";
        } 
        else {
            if(j === 0 || j === baris - 1) {
                bintang += "*";
            }
            else {
                bintang += " ";
            }
        }
    }
    bintang += "\n"
}
console.log(baris)
