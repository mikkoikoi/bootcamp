function readFormData() {           
    let formData = {};
    formData["nik"] = document.getElementById("nik").value;
    formData["nama"] = document.getElementById("nama").value;
    formData["umur"] = document.getElementById("umur").value;
    
    return formData;
}
export {readFormData}