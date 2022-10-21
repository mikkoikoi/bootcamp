import { onFormSubmit} from "./submit.js";

// import { readFormData } from "./read.js";
// import { insertNewRecord } from "./add.js";
// import { resetForm } from "./reset.js";
// import { updateRecord } from "./update.js";
// import { onDelete } from "./delete.js";
// import { onEdit } from "./edit.js";

let submit = document.getElementById("form1");
    submit.addEventListener("submit", onFormSubmit);


// let hapus = document.getElementById("btn1");
//     hapus.addEventListener("click", onDelete);

// let edit = document.getElementById("btn2");
//     edit.addEventListener("click", onEdit);

// let dataDel = document.querySelectorAll("tbody tr");
// dataDel.forEach(del => {
//     console.log(del);
// })