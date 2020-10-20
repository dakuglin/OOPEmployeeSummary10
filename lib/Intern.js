
const Employee = require("./Employee");

class Intern extends Employee { //class ChildClass extends ParentClass {...}

    constructor (name, id, email, school) {  //construction information for intern 
        
        super(name, id, email)
        this.school = school;

    }

    getSchool() {  //methods attahced to intern
        return this.school;
    }
    getRole () {  //methods attahced to intern
        return "Intern" 
    }
}

module.exports = Intern
