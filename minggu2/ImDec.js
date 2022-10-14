const names = ["Harry", "Ron", "Jeff", "Thomas"]
const newNamesWithExcMark = []

for(let i = 0; i < names.length; i++) {
    newNamesWithExcMark.push(`${names[i]}!`)
}

console.log(newNamesWithExcMark)


const names1 = ["Miko", "Asep", "Sunaryo", "Warto"]

const newNamesWithExcMark1 = names1.map((name) => `${name}!`)

console.log(newNamesWithExcMark1)