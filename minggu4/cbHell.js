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

// btn.addEventListener('click', () => {
//     setTimeout(() => {
//         first.style.color = 'red'
//     , 1000});
//     setTimeout(() => {
//         first.style.color = 'red'
//     , 1000});
//     setTimeout(() => {
//         first.style.color = 'red'
//     , 1000});
// })

btn.addEventListener('click', () => {
    promise1
    .then(() => {
        first.style.color = 'red'
        return promise2()
    })
    .then(() => {
        second.style.color = 'blue'
        return promise3()
    })
    .then(() => {
        third.style.color = 'green'
    })
})

function promise1 () {
    setTimeout(
        resolve()
        , 1000)
    }

    function promise1 () {
        setTimeout(
            resolve()
            , 3000)
        }

        function promise1 () {
            setTimeout(
                resolve()
                , 2000)
            }