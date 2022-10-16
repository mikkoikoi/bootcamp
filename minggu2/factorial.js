const factorial = function(mulai) {
    if (mulai == 0) {
        return 1
    }
    else {
        return mulai * factorial(mulai - 1)
    }
    // return (mulai == 0) ? 1 : mulai * factorial(mulai-1) 
}
console.log(factorial(5))

// When the user enters a negative number, a message Enter a positive number. is shown.

// When the user enters a positive number or 0, the function factorial(num) gets called.
// If the user enters the number 0, the program will return 1.
// If the user enters a number greater than 0, the program will recursively call itself by decreasing the number.
// This process continues until the number becomes 1. Then when the number reaches 0, 1 is returned.
