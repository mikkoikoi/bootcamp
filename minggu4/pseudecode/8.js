// Algorithm EXPONENT_DC(x, n)
// // we want to find n power of x

// if n == 0 then
//     return 1
// else
//     m ← EXPONENT_DC(x, n/2)
//     if n%2 == 0 then
//         return m*m      // if n is even
//     else
//         return m*m*x    // if n is odd
//     end
// end

const pow = (x, n) => {
  if (n === 0) {
    return 1;
  } else {
    m = pow(x, Math.floor(n/2));
    if (n % 2 === 0) {
      return m * m;
    } else {
      return m * m * x;
    }
  }
}

console.log(pow(2, 10));