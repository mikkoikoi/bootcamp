function printData() {
let tbody = document.getElementsByTagName('tbody')
tbody.innerHTML = ''

for (i in data){
        let tombolHapus = document.getElementById('btn1')
        tombolHapus.addEventListener("click", delData())
        let tombolEdit = document.getElementById('btn2')
        tombolEdit.addEventListener("click", editData())
}
}