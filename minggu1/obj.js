const user = {
    nama : "Miko Guntara",
    tanggalLahir : "10-05-2003",
    tempatLahir : "Bogor",
    kebangsaan : "Indonesia",
    "Jenis Kelamin" : "Laki-Laki",
    "Berat-Badan" : "60 Kg",
    "Tinggi" : "166",
    pahlawan : true,
    1 : "satu",
    [1] : "angka",
    null : "tipe data null",
    undefined : "tipe data undefined",
    true : "tipe data true",
    false : "tipe data false"
    
}
console.log(`Halo, nama saya ${user.nama} dan ${user[1]}`)
console.log(`Saya tinggal di ${user.tempatLahir} dan lahir pada ${user.tanggalLahir}`)
console.log(`Saya adalah seorang ${user['Jenis Kelamin']}`)
console.log(`Berat saya ${user['Berat-Badan']} dan tinggi saya ${user.Tinggi} cm`)
console.log(`berikut adalah tipe data ${user.null}, ${user.undefined}, ${user.true}, ${user.false}`)