// TODO: Write code to define and export the Employee class

class Employee {  //main basis that all the other employees have 

    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
  

   getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee" 
    }

}

module.exports = Employee
        


