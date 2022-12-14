// algorithm Sieve of Eratosthenes is
//     input: an integer n > 1.
//     output: all prime numbers from 2 through n.

//     let A be an array of Boolean values, indexed by integers 2 to n,
//     initially all set to true.
    
//     for i = 2, 3, 4, ..., not exceeding √n do
//         if A[i] is true
//             for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n do
//                 set A[j] := false

//     return all i such that A[i] is true.




const prima = n => {
    let A = new Array(n + 1).fill(true)
    A[0] = false
    A[1] = false

    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if (A[i]) {
            for (let j = i * i; j <= n; j+= i) {
                A[j] = false
            }
        }
    }
    return A.map((x, index) => (x) ? index : null)
        .filter(x => (x) ? x : null)
}

console.log(prima(100))