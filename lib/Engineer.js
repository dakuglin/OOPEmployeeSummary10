// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

function Engineer (name, id, email, github) { //constructor function 

    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;

    this.getName = () => {
        return this.name;
    }
    this.getId = () => {
        return this.id;
    }
    this.getEmail = () => {
        return this.email;
    }
    this.getGithub = () => {
        return this.github;
    }
    this.getRole = () => {
        return "Engineer" 
    }
}  

module.exports = Engineer


