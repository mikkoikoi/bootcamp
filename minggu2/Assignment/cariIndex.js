let merk = ["Ford", "Mercedes-Benz", "Nissan", "Volkswagen"]

function cari_merk (cari_index, merk_dicari) {
 let ketemu
 for(let i = 0; i <cari_index.length; i++) {
    if (cari_index[i] == merk_dicari) {
        ketemu = i
    }
 }
 return "ada " + merk_dicari + " di index ke " + ketemu
}
// let hasil
// hasil = cari_merk(merk, "Nissan")
console.log(cari_merk(merk, "Ford"))