// let baris = 5
// let bintang = ""
// for(let i = 0; i <= baris ; i++) {
//     bintang += "*"
// function untuk baris
function printn(num) {
    // base case
    if (num == 0)
        return;
    document.write("* ");

    printn(num - 1);
}

// function untuk pola
function pattern(n , i) {
    // base case
    if (n == 0)
        return;
    printn(i);
    document.write("<br/>");

    pattern(n - 1, i + 1);
}
    let n = 5;
    pattern(n, 1);
// console.log(bintang(5))