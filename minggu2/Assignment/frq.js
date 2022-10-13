
let barang = ["Buku", "Pulpen", "Penggaris"]

function posisi(i) {
    for (let index in barang) {
        if (i == barang[index]){
            return index
        }
    }
}

console.log(posisi("Penggaris   "));


// kalau di balik beginilah hasilnya

function dimana(i) {
    for (let index in barang) {
        if (i == index){
            return barang[index] + " => " + index;
        }
    }
}

console.log(dimana(1));