// fetch('./js/iniData.json', {
//     method: 'GET'
// })
// .then((response) => {
//     console.log(response)
//     if (!response.ok) {
//       throw new Error(`HTTP error, status = ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(typeOf (data))
//   })
function tampilData (data) {
    console.log(data)
    const tbodyElement = document.getElementById("databody")
    // const rows = window.userData.map((data, i)=>`<tr>
    // <td>${data.nik}</td>
    // <td>${data.nama}</td>
    // <td>${data.umur}</td>
    // <td>
    //     <button class="button" data-edit="${data.nama}" id="btn1">Edit</button>
    //     <button class="button button2" data-del="${data.nik}" id="btn2">Delete</button>
    // </td>
    //     </tr>`).join("")
    //     tbodyElement.innerHTML=rows
}

export{tampilData}