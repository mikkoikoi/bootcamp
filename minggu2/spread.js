const favororites = ["Seafood", "Salad", "Nugget", "Soup"];
// const others = ["Cake", "Pie", "Donut"];
// const allfav = [favororites, others]
// console.log(allfav)
// const allfava = [...favororites, ...others]
// console.log(allfava)

// console.log(favororites[0], favororites[1], favororites[2], favororites[3])

// const obj = {firstName : "Obi", age : 30};

// const allfav1 = {...obj}
// console.log(allfav1)
// const [firstFood, secondFood, thirdFood, fourthfood] = favororites

// console.log(firstFood)
// console.log(secondFood)
// console.log(thirdFood)
// console.log(fourthfood)


// const [, , ,fourthfood] = favororites
// console.log(fourthfood)

let myFood = "Ice Cream";
let yourFood = "Noodles";
[,,myFood, yourFood] = favororites
console.log(myFood)
console.log(yourFood)