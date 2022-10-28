//  Javascript Nuggets - Callback Hell
// after 1s first red;
// after 3s second blue; 4s
// after 2s third green; 6s
// IN SEQUENCE !!!!

const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  setTimeout(() => {
    first.style.color = 'red'
    setTimeout(() => {
      second.style.color = 'blue'
      setTimeout(() => {
        third.style.color = 'green'
      }, 2000)
    }, 3000)
  }, 1000)
})

btn.addEventListener('click', () => {
    setTimeout(() => {
        first.style.color = 'red'
    , 1000});
    setTimeout(() => {
        first.style.color = 'red'
    , 1000});
    setTimeout(() => {
        first.style.color = 'red'
    , 1000});
})

btn.addEventListener('click', () => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(first.style.color = "red")
        }, 1000)
        setTimeout(() => {
            resolve(second.style.color = "blue")
        }, 2000)
        setTimeout(() => {
            resolve(third.style.color = "green")
        }, 3000)
    })
})



// .then(() => {
    //     setTimeout(() => {
    //         console.log("hehe")
    //         first.style.color ="red"
    //     }, 1000)
    //     return new Promise(function (resolve){
    //       resolve()  
    //     })
    // })
    // .then(() => {
    //     setTimeout(() => {
    //         console.log("heha")
    //         second.style.color =  "blue"
    //     }, 2000)
    //     return new Promise(function (resolve) {
    //         resolve()
    //     })
    // })
    // .then(() => {
    //     console.log("hihi")
    //     setTimeout(() => {
    //         third.style.color = "green"
    //     }, 3000)
    // })
// }


//     .then(() => {
//         first.style.color = 'red'
//         return promise2()
//     })
//     .then(() => {
//         second.style.color = 'blue'
//         return promise3()
//     })
//     .then(() => {
//         third.style.color = 'green'
//     })
// })

// function promise1 (resolve) {
//     setTimeout(
//         resolve()
//         , 1000)
//     }

//     function promise1 (resolve) {
//         setTimeout(
//             resolve()
//             , 3000)
//         }

//         function promise1 (resolve) {
//             setTimeout(
//                 resolve()
//                 , 2000)
//             }
