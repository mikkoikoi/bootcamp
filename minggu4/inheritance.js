function Employee (firstName) {
    this.firstName = firstName;
    this.sayHello = function (name) {
        console.info(`Hello ${name}, My name is ${this.firstName}`);
    }
}
function Manager (firstName, lastName) {
    Employee.call(this, firstName);
    this.lastName = lastName;
    }

    const eko = new Manager ("Eko", "Khannedy");

    console.log(eko);