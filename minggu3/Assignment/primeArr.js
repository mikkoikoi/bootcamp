let array = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const prima = arr => arr.filter(num => primaFp(num));
const primaFp = (num, i = 2) => {
    if (num == 1) return false;
    if (num == 2) return true;

    if (i > Math.floor(Math.sqrt(num))) {
        return true;
    } else {
        return (num % i == 0) ? false : primaFp(num, ++i);
    }
}
const hasil = prima(array)
console.log(hasil)