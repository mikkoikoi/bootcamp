import {selectedRow} from "./submit.js"

function updateRecord(data) {
    selectedRow.cells[0].innerHTML = data.nik;
    selectedRow.cells[1].innerHTML = data.nama;
    selectedRow.cells[2].innerHTML = data.umur;
    
}

export{updateRecord}