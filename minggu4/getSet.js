class myObj  {
    #a = 7
}
    
class childObj {    
    get b() {
        return this.a + 1
    } 
    set c(x) {
        this.a = x   / 2
    }
}
// console.log(myObj.a)
console.log(myObj.b)
myObj.c = 50
console.log(myObj.a)