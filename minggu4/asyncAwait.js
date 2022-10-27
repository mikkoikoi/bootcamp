function cobaPromise () {
    return new Promise (resolve => {
        const waktu = 5500
        if(waktu < 5000) {
        setTimeout(() => {
            resolve('selesai')
        }, 2000)
        } else {
            PromiseRejectionEvent('lama')
            console.log(PromiseRejectionEvent.promise)
            console.log(PromiseRejectionEvent.reason)
        }
    })
}

async function cobaAsync () {
    const coba = await cobaPromise()
    console.log(coba)
}

try {
    cobaAsync()
    } catch (e) {
        alert(e)
    }