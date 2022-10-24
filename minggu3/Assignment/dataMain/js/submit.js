import { readFormData} from "./read.js"
import { insertNewRecord } from "./add.js"
import { resetForm } from "./reset.js"
import { updateRecord } from "./update.js"

window.selectedRow = 'insert'

function onFormSubmit(event) {
    
    try { 
        
        let data = readFormData();
        
        if(data.nik == "" || data.nama == "" || data.umur == ""){
        throw "Data harus diisi!";
        }
        
        let karakter = /^\d{16}$/;
        if (!karakter.test(data.nik)) {
            throw 'NIK harus berisi 16 karakter';
            
        }if (isNaN(data.nik) || isNaN(data.umur)) {
            throw "Harus diisi dengan angka positif!";

        }
        console.log("selected row submit",window.selectedRow)
        if (window.selectedRow === "insert"){
            insertNewRecord(data);
            console.log("insertNewRecord", window.selectedRow)
            
        }else{
            updateRecord(data);
            console.log("updateRecord")
            
        }
        console.log(data)
        // readFormData()
        event.preventDefault();
        resetForm()
       
    
        } catch (e) {
            alert(e);
        }
    }

    export {onFormSubmit}