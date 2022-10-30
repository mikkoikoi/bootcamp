import { resetForm } from "./reset.js";
import { tampilData } from "./tampil.js";

function onDelete(id) {
    console.log("halooo")
  try {
    (async () => {
      const del = await fetch(`http://104.248.154.192:3005/person/${id}`, {
        method: "DELETE",
      });
      const responseDel = await del.json();
      
      if (responseDel.message === "success") {
        alert(`Delete data ${responseDel.message}`);
      }
      
      tampilData()
      resetForm()
    })();
  
  } catch (err) {
    console.log(err);
  }
  // let row
  // if (confirm('Hapus data ini? ')) {
  //     row = td.parentElement.parentElement;
  //     document.getElementById("listData").deleteRow(row.rowIndex);
  //     resetForm();
  // }
}
export { onDelete };
