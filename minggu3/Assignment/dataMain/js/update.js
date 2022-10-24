import { tampilData } from "./tampil.js"


function updateRecord(data) {
    const objIndex = window.userData.findIndex ((obj)=> obj.nik === data.nik)
    window.userData[objIndex] = data
    console.log(data)
    tampilData()
    window.selectedRow = "insert"
    // window.selectedRow.cells[0].innerHTML = data.nik;
    // window.selectedRow.cells[1].innerHTML = data.nama;
    // window.selectedRow.cells[2].innerHTML = data.umur;
}

export{updateRecord}