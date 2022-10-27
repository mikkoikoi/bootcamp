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
  const coba = await cobaPromise()
    .then((resolve) => {
      resolve();
    })
    .catch((reject) => {
      console.log(reject)
    });
}

let i = document.getElementById("btn");
i.addEventListener("unhandledrejection", alert("halo"));

try {
  cobaAsync();
} catch (e) {
  alert(e);
}
