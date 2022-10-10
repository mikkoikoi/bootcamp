function fungsi () {
    var angka = function () {
        return angka(100)
    }
    function bilek () {
        return bilek(1000)
    }
}
console.log(fungsi())