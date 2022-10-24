import {resetForm} from "./reset.js"

function onDelete(td) {
    let row
    if (confirm('Hapus data ini? ')) {
        row = td.parentElement.parentElement;
        document.getElementById("listData").deleteRow(row.rowIndex);
        resetForm();
    }
}
export{onDelete}




