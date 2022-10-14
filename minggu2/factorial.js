const factorial = function(start) {
    if (start == 0) {
        return 1
    }
    else {
        return start * factorial(start - 1)
    }
}
console.log(factorial(5))