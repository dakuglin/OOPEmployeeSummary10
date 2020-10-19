
const Employee = require("./Employee");

class Engineer extends Employee { //class ChildClass extends ParentClass {...}

    constructor (name, id, email, github) {

        super(name, id, email)
        // this.name = name;
        // this.id = id;
        // this.email = email;
        this.github = github;

    }

    getGithub = () => {
        return this.github;
    }
    getRole = () => {
        return "Engineer" 
    }
}

module.exports = Engineer

// function Engineer (name, id, email, github) { //constructor function 

//     this.name = name;
//     this.id = id;
//     this.email = email;
//     this.github = github;

//     this.getName = () => {
//         return this.name;
//     }
//     this.getId = () => {
//         return this.id;
//     }
//     this.getEmail = () => {
//         return this.email;
//     }
//     this.getGithub = () => {
//         return this.github;
//     }
//     this.getRole = () => {
//         return "Engineer" 
//     }
// }  




