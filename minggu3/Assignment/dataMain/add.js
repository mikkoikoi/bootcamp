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

export{insertNewRecord}