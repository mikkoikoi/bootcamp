function readFormData() {           
    let formData = {};
    formData["nik"] = document.getElementById("nik").value;
    formData["nama"] = document.getElementById("nama").value;
    formData["alamat"] = document.getElementById("alamat").value;
    
    return formData;
}
export {readFormData}