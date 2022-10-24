import {tampilData} from "./tampil.js"

function insertNewRecord(data) {
    console.log(data)
    window.userData.push(data)
    tampilData()
    // let table = document.getElementById("listData").getElementsByTagName('tbody')[0];
    // let newRow = table.insertRow(table.length);
    // let cell1 = newRow.insertCell(0);
    // cell1.innerHTML = data.nik;
    // let cell2 = newRow.insertCell(1);
    // cell2.innerHTML = data.nama;
    // let cell3 = newRow.insertCell(2);
    // cell3.innerHTML = data.umur;
    // let cell4 = newRow.insertCell(3);
    // cell4.innerHTML = `<button class="button" data-edit="${data.nama}" id="btn1">Edit</button>
    //                    <button class="button button2" data-del="${data.nik}" id="btn2">Delete</button>`
}

export{insertNewRecord}
