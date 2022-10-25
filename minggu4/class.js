// class Person {
//     nama = ""
//     umur = ""

// detail () {
//     return `Nama saya ${this.nama} dan umur saya ${this.umur} tahun`
// }
// }

// const pers1 = new Person()
// pers1.nama = "Nayuta"
// pers1.umur = "19"
// console.log(pers1.detail())


class Person {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }
    show() {
        return `Nama saya ${this.nama} dan umur saya ${this.umur} tahun`;
    }
}

class Person2 extends Person {
    constructor(nama, umur, nik) {
        super(nama, umur)   
        this.nik = nik
    }
    detail () {
        return `Nama saya ${this.nama} dan umur saya ${this.umur} tahun, nik saya adalah ${this.nik}`
    }

}

const pers3 = new Person2 ("Miko", "19", "12345678901234")
console.log(pers3.detail())
// const pers2 = new Person ("Miko", "19");
// console.log(pers2.show());