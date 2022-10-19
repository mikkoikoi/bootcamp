// function square(x) {
//     return x * x;
// }


// function abs(x) {
//     return x >= 0 ? x : - x;
// }


// function sqrt_iter(guess, x) {
//     return is_good_enough(guess, x)
//            ? guess
//            : sqrt_iter(improve(guess, x), x);
// } 
// function improve(guess, x) {
//     return average(guess, x / guess);
// }
// function average(x, y) {
//     return (x + y) / 2;
// }
// function is_good_enough(guess, x) {
//     return abs(square(guess) - x) < 0.001;
// }
// function sqrt(x) {
//     return sqrt_iter(1, x);
// }

// console.log(sqrt(16))

// function square(x) {
//     return x * x;
// }
const square = x => x * x


// function abs(x) {
//     return x >= 0 ? x : - x;
// }
const abs = x => x >= 0 ? x : - x


// function sqrt_iter(guess, x) {
//     return is_good_enough(guess, x)
//            ? guess
//            : sqrt_iter(improve(guess, x), x);
// } 
const sqrt_iter = (guess, x) => is_good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x)


// function improve(guess, x) {
//     return average(guess, x / guess);
// }
const improve = (guess, x) => average(guess, x / guess)


// function average(x, y) {
//     return (x + y) / 2;
// }
const average = (x, y) => (x + y) / 2


// function is_good_enough(guess, x) {
//     return abs(square(guess) - x) < 0.001;
// }
const is_good_enough = (guess, x) => abs(square(guess) -x) <0.001


// function sqrt(x) {
//     return sqrt_iter(1, x);
// }
const sqrt = x => sqrt_iter(1, x)

console.log(sqrt(16))