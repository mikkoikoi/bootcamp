var selectedRow = null

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


function readFormData() {           
    var formData = {};
    formData["nik"] = document.getElementById("nik").value;
    formData["nama"] = document.getElementById("nama").value;
    formData["umur"] = document.getElementById("umur").value;
    
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("listData").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nik;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.nama;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.umur;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = `<button class="button" onClick="onEdit(this)">Edit</button>
                       <button class="button button2" onClick="onDelete(this)">Delete</button>`
}

function resetForm() {
    document.getElementById("nik").value = "";
    document.getElementById("nama").value = "";
    document.getElementById("umur").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nik").value = selectedRow.cells[0].innerHTML;
    document.getElementById("nama").value = selectedRow.cells[1].innerHTML;
    document.getElementById("umur").value = selectedRow.cells[2].innerHTML;
    
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nik;
    selectedRow.cells[1].innerHTML = formData.nama;
    selectedRow.cells[2].innerHTML = formData.umur;
    
}

function onDelete(td) {
    if (confirm('Hapus data ini? ')) {
        row = td.parentElement.parentElement;
        document.getElementById("listData").deleteRow(row.rowIndex);
        resetForm();
    }


}