
const Employee = require("./Employee");

class Intern extends Employee { //class ChildClass extends ParentClass {...}

    constructor (name, id, email, school) {  //construction information for intern 
        
        super(name, id, email)
        // this.name = name;
        // this.id = id;
        // this.email = email;
        this.school = school;

    }

    getSchool = () => {  //methods attahced to intern
        return this.school;
    }
    getRole = () => {  //methods attahced to intern
        return "Intern" 
    }
}

module.exports = Intern

// function Intern (name, id, email, school) { //build intern object

//     this.name = name;
//     this.id = id;
//     this.email = email;
//     this.school = school;

//     this.getName = () => {
//         return this.name;
//     }
//     this.getId = () => {
//         return this.id
//     }
//     this.getEmail = () => {
//         return this.email;
//     }
//     this.getSchool = () => {
//         return this.school;
//     }
//     this.getRole = () => {
//         return "Intern" 
//     }

// };

module.exports = Intern