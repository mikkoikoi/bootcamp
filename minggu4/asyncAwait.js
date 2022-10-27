function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 5500;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("selesai");
      }, 2000);
    } else {
      // PromiseRejectionEvent('lama')
      // console.log(PromiseRejectionEvent.promise)
      // console.log(PromiseRejectionEvent.reason)
      // reject ('lama')
      reject();
    }
  });
}

// const coba = cobaPromise

async function cobaAsync() {
  return await cobaPromise()
    .then((resolve) => {
      resolve();
    })
    .catch((reject) => {
      console.log(reject)
    });
}

try {
  cobaAsync();
} catch (e) {
  alert(e);
}

// let i = document.getElementById("btn");
// i.addEventListener("unhandledrejection", alert("halo"));

