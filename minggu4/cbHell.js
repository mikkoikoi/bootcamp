//  Javascript Nuggets - Callback Hell
// after 1s first red;
// after 3s second blue; 4s
// after 2s third green; 6s
// IN SEQUENCE !!!!

const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const btn = document.querySelector('.btn')

// btn.addEventListener('click', () => {
//   setTimeout(() => {
//     first.style.color = 'red'
//     setTimeout(() => {
//       second.style.color = 'blue'
//       setTimeout(() => {
//         third.style.color = 'green'
//       }, 2000)
//     }, 3000)
//   }, 1000)
// })

btn.addEventListener('click', () => {
const count =() => {
new Promise(resolve => {
    setTimeout(()=> {
        resolve(first.style.color = "red")
    }, 1000)
})
new Promise(resolve => {
    setTimeout(()=> {
        resolve(second.style.color = "blue")
    })
}, 2000)
new Promise(resolve => {
    setTimeout(()=> {
        resolve(second.style.color = "green")
    })
}, 3000)
}


})
function tangkap() {
    count()
    .then((value) => {
        console.log(value)
        return count()
    })
}
tangkap()