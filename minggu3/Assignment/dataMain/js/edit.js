

function onEdit(td) {
    const selectedData = td.parentElement.parentElement.cells
    const data = {
        nik : selectedData[0].innerHTML,
        nama : selectedData[1].innerHTML,
        alamat : selectedData[2].innerHTML
    }
    window.selectedRow = "update"
    document.getElementById("nik").value = data.nik
    document.getElementById("nama").value = data.nama
    document.getElementById("alamat").value = data.alamat
    console.log(td.parentElement.parentElement.cells)
}

export{onEdit}