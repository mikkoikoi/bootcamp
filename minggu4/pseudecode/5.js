// if m < n, swap(m,n)
// while n does not equal 0
//    r = m mod n
//    m = n
//    n = r
// endwhile
// output m

const euclid = (m, n) => {
    if (m < n) {
        [m, n] = [n, m]
    }

    while (n != 0) {
        r = m % n
        m = n
        n = r
    }
    return m
}

console.log(gcd(5, 10))