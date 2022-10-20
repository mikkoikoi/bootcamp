let selectedRow =  null
function onFormSubmit() {
    
    try { 
        const data = readFormData() 
        const formData = readFormData();

        if(data.nik == "" || data.nama == "" || data.umur == ""){
        throw "Data harus diisi!"
        }
        
        let karakter = /^\d{16}$/;
        if (!karakter.test(data.nik)) {
            throw 'NIK harus berisi 16 karakter';
            
        }if (isNaN(data.nik) || isNaN(data.umur)) {
            throw "Harus diisi dengan angka positif!";

        }

        if (selectedRow == null){
            insertNewRecord(formData);
            
        }else{
            updateRecord(formData);
            
        }
        resetForm();
    
        } catch (e) {
            alert(e)
        }
    }