function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 4400;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve('selesai bray');
      }, waktu);
    } else {
      // PromiseRejectionEvent('lama')
      // console.log(PromiseRejectionEvent.promise)
      // console.log(PromiseRejectionEvent.reason)
      // reject ('lama')
      reject('kelamaan cuy');
    }
  });
}


// no async
// const coba = cobaPromise()
// coba
//     .then((coba) => console.log(coba))
//     .catch((coba) => console.log(coba))


// with async
async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (e) {
    console.log(e);
  }
}


let i = document.getElementById("btn");
i.addEventListener("click", cobaAsync());

