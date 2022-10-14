let PI = 3.14

const hitungLuasLingkaran = (jariJari) => {
    return PI * (jariJari * jariJari)
}

console.log(hitungLuasLingkaran(4))

PI = 5

console.log(hitungLuasLingkaran(4))

const hitungLuasLingkaran1 = (jariJari) => {
    const PI = 3.14
    return PI * (jariJari * jariJari)
}

console.log(hitungLuasLingkaran1(8))
console.log(hitungLuasLingkaran1(8))


const creatPersonWithAge = (age, person) => {
    return {...person, age }
}
const person = {
    name : "bobo"
}

const newPerson = creatPersonWithAge(18, person)

console.log({
    person,
    newPerson
})

