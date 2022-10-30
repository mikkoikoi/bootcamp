import { tampilData } from "./tampil.js"


function updateRecord(data) {
    const objIndex = window.userData.findIndex ((obj)=> obj.nik === data.nik)
    window.userData[objIndex] = data
    console.log(data)
    tampilData()
    window.selectedRow = "insert"
}

export{updateRecord}