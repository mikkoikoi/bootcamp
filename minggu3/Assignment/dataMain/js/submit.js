import { readFormData} from "./read.js"
import { insertNewRecord } from "./add.js"
// import { resetForm } from "./reset.js"
import { updateRecord } from "./update.js"
import { Err } from "./error.js"
import { tampilData } from "./tampil.js"


window.selectedRow = 'insert'

function onFormSubmit(event) {
    try { 
        
        let data = readFormData();
        
        if(data.nik == "" || data.nama == "" || data.alamat == ""){
        throw new Err("Data harus diisi!");
        }
        
        let karakter = /^\d{16}$/;
        if (!karakter.test(data.nik)) {
            throw new Err ('NIK harus berisi 16 karakter');
            
        }if (isNaN(data.nik)) {
            throw new Err ("Harus diisi dengan angka positif!");

        }
        console.log("selected row submit",window.selectedRow)
        if (window.selectedRow === "insert"){
            insertNewRecord(data);
            console.log("insertNewRecord", window.selectedRow)
            
        }else{
            const id = document.getElementById("nik").dataset.edit
            updateRecord(data, id);
            console.log("updateRecord")
            
        }
        console.log(data)
        event.preventDefault();
       tampilData()
    
        } catch (e) {
            console.log(e);
        }
    }

    export {onFormSubmit}