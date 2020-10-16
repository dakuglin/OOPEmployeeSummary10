// TODO: Write code to define and export the Employee class

const inquirer = require("inquirer");

const managerQuestions = [ // array of questions for user
    {
    type: "input",
    message: "What is the name of the manager?", //question 
    name: "managerName", //variable name
    },
    {
    type: "input", 
    message: "Please provide the manager id number: ", //question 
    name: "managerId", //variable name
    },
    {
    type: "input", 
    message: "Please enter the manager email: ", //question 
    name: "managerEmail", //variable name
    },
    {
    type: "input", 
    message: "Please enter manager office number: ", //question 
    name: "managerOffice", //variable name
    },

];


inquirer.prompt(managerQuestions) 
    .then(function(data){
        console.log(data)
    })

