
const Employee = require("./Employee");
 
class Manager extends Employee {  //class ChildClass extends ParentClass {...}

    constructor (name, id, email, officeNumber) { //managers information 

        super(name, id, email)
        this.officeNumber = officeNumber;

    }

    getOfficeNumber() {  //method. functions that only live within this class manager 
        return this.officeNumber
    }
    getRole() {
        return "Manager" 
    }
}

module.exports = Manager

    