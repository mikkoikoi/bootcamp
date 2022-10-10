let n = 15

function operasi(n) {
    for (let i = 1; i<=n ; i++) {
        if (i % 2==0) {
            console.log(i, " --> genap\n")
        }
        else 
        {
            console.log(i, " --> ganjil\n")
        }
    }
}
operasi(n)