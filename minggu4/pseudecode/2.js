// function fibonacci(n):
//     // We can't get n-2 for 0 and 1, so return them directly
//     if n is 0 or 1, return 1

//     // Set these to the first two numbers of the fibonacci sequence
//     prev1 = 1
//     prev2 = 1

//     // use 2 here because we've already done when n is 0 and 1
//     loop from 2 until n:
//         current = prev1 + prev2

//         // Update the previous numbers, so we're ready for the next loop
//         prev2 = prev1
//         prev1 = current

//    return current

const fibonacci = (n) => {

    if (n === 0 || n === 1) {
        return 1
    }

    let prev1 = 1
    let prev2 = 1
    let current

        for (let i = 2 ; i <= n; i++) {
            current = prev1 + prev2
            prev2 = prev1
            prev1 = current
            console.log(current)
        }   

        return n
    
}

fibonacci(3)