fetch('iniData.json')
.then((response) => {
    console.log(response)
    response.json
})
.then((data) =>{
    console.log(data)
})