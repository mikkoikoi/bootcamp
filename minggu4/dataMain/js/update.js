import { tampilData } from "./tampil.js"


function updateRecord(data, id) {
    try {
        (async () => {
            const put = await fetch(`http://104.248.154.192:3005/person/${id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({nik: data.nik, nama: data.nama, alamat: data.alamat})
            });
            const responsePut = await put.json();
            if (responsePut.message === 'success') {
                alert(`Edit data ${responsePut.message}`);
            }
            
            tampilData();
        })();

    } catch(err) {
        console.log(err);
    }

}

export{updateRecord}