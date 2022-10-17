let nama = ["miko", "naryo", "asep"]
let newNama = nama.map(reverseString)
function reverseString(nama) {
  return nama.split('').reverse().join('')
}
console.log(newNama)