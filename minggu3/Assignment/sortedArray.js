const array = [4, 3, 5, 1, 2, 10, 20];

// imperative
let output = [];
let inserted;

for (let i = 0, ii = array.length ; i < ii ; i++){
  inserted = false;
  for (let j = 0, jj = output.length ; j < jj ; j++){
    if (array[i] < output[j]){
      inserted = true;
      output.splice(j, 0, array[i]);
      break;
    }
  }
  
  if (!inserted)
    output.push(array[i])
}

console.log(output);





// functional
array.sort((a, b) => a - b)
const theSorted = array
console.log(theSorted)