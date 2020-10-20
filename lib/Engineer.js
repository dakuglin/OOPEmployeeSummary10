
const Employee = require("./Employee");

class Engineer extends Employee { //class ChildClass extends ParentClass {...}

    constructor (name, id, email, github) {

        super(name, id, email)
        this.github = github;

    }

    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer" 
    }
}

module.exports = Engineer

