const foods = ['Pie', 'Cake', 'Honey']

const myFood = foods[0]
const yourFood = foods[1]
const ourFood = foods[2]

console.log(myFood, yourFood, ourFood)


let profile = {
    firstName : "John",
    lastName : "Doe",
    age : "38"
}
//  let firstName = "Dimas";
//  let age = 20;
// const firstName = profile.firstName
// const lastName = profile.lastName
// const age = profile.age

// ({firstName, age} = profile)

// console.log(`my name is ${firstName} ${lastName} and i'm ${age} years old`)
// const{firstName, age, isMale = false} = profile 

const {firstName : namaLokal, lastName : akhiranLokal, age : umurLokal} = profile

console.log(namaLokal)
console.log(akhiranLokal)
console.log(umurLokal)