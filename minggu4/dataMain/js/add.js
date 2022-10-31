import { tampilData } from "./tampil.js";

function insertNewRecord() {
try {
  let inputNikObj = document.getElementById("nik");
  let inputNamaObj = document.getElementById("nama");
  let inputAlamatObj = document.getElementById("alamat");


  let inputNik = inputNikObj.value;
  let inputNama = inputNamaObj.value;
  let inputAlamat = inputAlamatObj.value;


  let emptyField = [];
        let isEmpty = 0;
        if (inputNik =='') {
            emptyField.push('NIK');
            isEmpty = 1;
        }

        if (inputNama =='') {
            emptyField.push('NAMA');
            isEmpty = 1;
        }

        if (inputAlamat =='') {
            emptyField.push('ALAMAT');
            isEmpty = 1;
        }


  
  inputNikObj.value = ''
  inputNamaObj.value = ''
  inputAlamatObj.value = ''


 

  try {
    (async () => {
      const response = await fetch("http://104.248.154.192:3005/person", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nik: inputNik,
          nama: inputNama,
          alamat: inputAlamat,
        }),
      });
      const responded = await response.json();
      if (responded.message === "success") {
        alert(`Input data ${responded.message}`);
      }

      tampilData();
    })();
    } catch (error) {
        alert(`(ERROR ${error.code}) ${error.message}`);
    }

    }catch (e) {
        alert (e)
    }
}

export { insertNewRecord }
