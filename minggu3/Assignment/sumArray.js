// Impure
const array = [1, 2, 3, 4, 5, 6];
let s = 0;
for (let i = 0; i < array.length; i += 1) 
   {
    s += array[i];
    }
console.log(`Sum : ${s}`);

// functional
const sum = (accumulatedSum, arrayItem) => accumulatedSum + arrayItem
const total = array.reduce(sum)
console.log(total)