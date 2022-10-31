
function onEdit(td) {

        selectedRow = td.parentElement.parentElement;
        const id = td.dataset.edit
        console.log(id)
        document.getElementById("nik").value = selectedRow.cells[0].innerHTML;
        document.getElementById("nik").setAttribute("data-edit", id)
        document.getElementById("nama").value = selectedRow.cells[1].innerHTML;
        document.getElementById("alamat").value = selectedRow.cells[2].innerHTML;
        console.log(selectedRow)
        
        
        
    // console.log(this)
    // const selectedData = td.parentElement.parentElement.cells
    // const data = {
    //     nik : selectedData[0].innerHTML,
    //     nama : selectedData[1].innerHTML,
    //     alamat : selectedData[2].innerHTML
    // }
    // window.selectedRow = "update"
    // document.getElementById("nik").value = data.nik
    // document.getElementById("nama").value = data.nama
    // document.getElementById("alamat").value = data.alamat
    // console.log(td.parentElement.parentElement.cells)
    
}

export{onEdit}