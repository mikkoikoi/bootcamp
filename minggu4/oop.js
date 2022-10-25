// class Barang {
//     constructor(name, price) {
//         this.name = name
//         this.price = price
//     }

//     detail () {
//         return this.name + " " + this.price
//     }
// }

// const barang1 = new Barang("Laptop MSI", 12000);

// console.log(barang1.name);
// console.log(barang1.price);
// console.log(barang1.detail())

// kenapa oop dibutuhkan dalam javascript

function Person(firstName, lastName) {
    this.firsName = firstName
    this.lastName = lastName
    this.sayHello = function (name) {
        console.info(`Hello ${name}, my name is ${this.firsName}`)
    }
}

const eko = new Person("Eko", "Khannedy")
eko.sayHello("Eko")



const budi = new Person("Budi", "Nugraha")
budi.sayHello("Budi")

console.log(eko)
console.log(budi)