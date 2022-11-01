import { onDelete } from "./delete.js";
import { onEdit } from "./edit.js";

function tampilData() {
  try {
    let tbodyElement = document.getElementById("databody");
    (async () => {
      const response = await fetch("http://104.248.154.192:3005/person");
      const iniData = await response.json();
      const dataMain = iniData.data;
      tbodyElement.innerHTML = "";

      for (let i in dataMain) {
          let editButton = `<button
          data-edit="${dataMain[i].id}"
          type="button"
          class="button btn1"
      >Edit</button>`;

        let deleteButton = `<button 
        data-del="${dataMain[i].id}"
        type="button"
        class="button btn2"
    >Delete</button>`;


        let tableRow = `<tr>
                            <td ${dataMain[i]}>${dataMain[i].nik}</td>
                            <td ${dataMain[i]}>${dataMain[i].nama}</td>
                            <td ${dataMain[i]}>${dataMain[i].alamat}</td>
                            <td>
                                ${editButton}
                                ${deleteButton}
                            </td>
                        </tr>`;
        tbodyElement.innerHTML += tableRow;
        
      }
      
      $(".btn1").on("click", function () {
        onEdit(this);
      });

      $(".btn2").on("click", function () {
        onDelete($(this).data("del"));
      });

    })();
  } catch (e) {
    console.error(e);
  }
}

export { tampilData };
