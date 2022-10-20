function onDelete(td) {
    if (confirm('Hapus data ini? ')) {
        row = td.parentElement.parentElement;
        document.getElementById("listData").deleteRow(row.rowIndex);
        resetForm();
    }


}