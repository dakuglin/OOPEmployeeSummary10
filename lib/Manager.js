
const Employee = require("./Employee");
 
class Manager extends Employee {  //class ChildClass extends ParentClass {...}

    constructor (name, id, email, officeNumber) { //managers information 

        super(name, id, email)
        // this.name = name;
        // this.id = id;
        // this.email = email;
        this.officeNumber = officeNumber;

    }

    getOfficeNumber = () => {  //method. functions that only live within this class manager 
        return this.officeNumber
    }
    getRole = () => {
        return "Manager" 
    }
}

module.exports = Manager

    //function Manager (name, id, email, officeNumber) { //build manager object in constructor function

    // // this.name = name;
    // // this.id = id;
    // // this.email = email;
    // // this.officeNumber = officeNumber;

    // this.getName = () => {
    //     return this.name;
    // }
    // this.getId = () => {
    //     return this.id;
    // }
    // this.getEmail = () => {
    //     return this.email;
   

// };


        





