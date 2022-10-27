function cobaPromise () {
    return new Promise (resolve => {
        const waktu = 3000
        if(waktu < 5000) {
        setTimeout(() => {
            resolve('selesai')
        }, 2000)
        } else {
            PromiseRejectionEvent('lama')
        }
    })
}

async function cobaAsync () {
    const coba = await cobaPromise()
    console.log(coba)
}

cobaAsync()