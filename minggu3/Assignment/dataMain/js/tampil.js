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
    console.log(data.info[0])
    const tbodyElement = document.getElementById("databody")
    data.info.map((data)=>{
        console.log(data.nik)
        return `<tr>
    <td>${data.nik}</td>
    <td>${data.nama}</td>
    <td>${data.umur}</td>
    <td>
        <button class="button" data-edit="${data.nama}" id="btn1">Edit</button>
        <button class="button button2" data-del="${data.nik}" id="btn2">Delete</button>
    </td>
        </tr>`}).join("")
        tbodyElement.innerHTML=data.info[0].nik
}

export{tampilData}