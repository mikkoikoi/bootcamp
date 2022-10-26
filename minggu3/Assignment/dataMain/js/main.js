import { onFormSubmit} from "./submit.js";
// import { readFormData } from "./read.js";
// import { insertNewRecord } from "./add.js";
// import { resetForm } from "./reset.js";
// import { updateRecord } from "./update.js";
import { onDelete } from "./delete.js";
import { onEdit } from "./edit.js";
import { tampilData } from "./tampil.js";

let datas


datas = fetch('./js/iniData.json', {
    method: 'GET'
})
.then((response) => {
    console.log(response)
    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
      console.log(data)
      return data
  })
  
  console.log(datas)

document.addEventListener("DOMContentLoaded", (event)=> {
    tampilData()

    let submit = document.getElementById("btnsimpan");
    submit.addEventListener("click", onFormSubmit);


    let parentEdit = document.getElementsByTagName("tbody")[0];
    parentEdit.addEventListener("click", (e) => {
        if(e.srcElement.hasAttribute("data-edit")) {
            onEdit(e.srcElement);
        }
    })

    let parentDel = document.getElementsByTagName("tbody")[0];
    parentDel.addEventListener("click", (e) => {
        if(e.srcElement.hasAttribute("data-del")) {
            onDelete(e.srcElement);
        }
    });
})



