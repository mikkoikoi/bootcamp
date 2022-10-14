const names = ["Asep", "Naryo", "Soeharto", "Puan"]

const newNamesWithExcMark = names.map((name) => `${name}!`)

console.log({
    names,
    newNamesWithExcMark,
})

const user = {
    firstName : "Harry",
    lastName : "Portter"
}

const createUserWithNewLastName = (newLastName, user) => {
    return{...user,lastName : newLastName
}}

const newUser = createUserWithNewLastName('Potter', user)
console.log(newUser)