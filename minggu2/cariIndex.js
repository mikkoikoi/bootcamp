let merk = ["Ford", "Mercedes-Benz", "Nissan", "Volkswagen"]

function cari_merk (cari_index, merk_dicari) {
 let ketemu 
 for(let i = 0; i <cari_index.length; i++) {
    if (cari_index[i] == merk_dicari) {
        ketemu = i
    }
 }
 return ketemu   
}
let hasil
hasil = cari_merk(merk, "Volkswagen")
console.log("ketemu di : " + hasil)