const power3 = genPow(3)
function genPow (power) {
    return function toThePowerOf (number) {
        return number ** power
    }
}
// const hasil = genPow(5)(2)
// console.log(hasil)

console.log(power3(10))
