function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nik").value = selectedRow.cells[0].innerHTML;
    document.getElementById("nama").value = selectedRow.cells[1].innerHTML;
    document.getElementById("umur").value = selectedRow.cells[2].innerHTML;
    
}

export{onEdit}