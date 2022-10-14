const factorial = function(mulai) {
    if (mulai == 0) {
        return 1
    }
    else {
        return mulai * factorial(mulai - 1)
    }
}
console.log(factorial(5))