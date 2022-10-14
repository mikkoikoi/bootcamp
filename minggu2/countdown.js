function angka() {
    let angka1 = 10
    for (let i = angka1; i > 0 ; i--) {
        console.log(i)
    }
}
angka()

console.log("batas")
let text = ""
let mulai = 10
do { text += mulai
    console.log(mulai)
    mulai--
}
while (mulai>0);
console.log("batas")

const countDown = start => {
    console.log(start)
    if(start > 0) countDown(start -1)
}

countDown(10)