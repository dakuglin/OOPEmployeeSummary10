// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


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

const employeeType = [
    {
    type: "list",
    message: "Please select the type of employee you would like to add: ",
    name: "employeeType",
    choices: ["Engineer", "Intern", "No more employees to add!"],
    }
]

const engineerQuestions = [ // array of questions for user
    {
    type: "input",
    message: "What is the name of the engineer?", //question 
    name: "engineerName", //variable name
    },
    {
    type: "input", 
    message: "Please provide the engineer id number: ", //question 
    name: "engineerId", //variable name
    },
    {
    type: "input", 
    message: "Please enter the engineer email: ", //question 
    name: "engineerEmail", //variable name
    },
    {
    type: "input", 
    message: "Please enter engineer GitHub username: ", //question 
    name: "engineerUsername", //variable name
    },

];
const internQuestions = [ // array of questions for user
    {
    type: "input",
    message: "What is the name of the intern?", //question 
    name: "internName", //variable name
    },
    {
    type: "input", 
    message: "Please provide the intern id number: ", //question 
    name: "internId", //variable name
    },
    {
    type: "input", 
    message: "Please enter the intern email: ", //question 
    name: "internEmail", //variable name
    },
    {
    type: "input", 
    message: "Please enter intern school name: ", //question 
    name: "internSchool", //variable name
    },

];

function handleManagerQuestions() {

    inquirer.prompt(managerQuestions) 
    .then(function(response) {
        
         addEmployee();
        
    });
};

handleManagerQuestions()


function addEmployee() {

    inquirer.prompt(employeeType) 
    .then(function(response) {
        
        if (response.employeeType === "Engineer") {
            handleEngineerQuestions();
        } 
        else if (response.employeeType === "Intern") {
            handleInternQuestions();
        }
        else if (response.employeeType ==="No more employees to add!") {
            console.log("We will end the questions process")
        }
     
    });
};

function handleEngineerQuestions() {
    inquirer.prompt(engineerQuestions) 
    .then(function(response) {
        
         addEmployee()
        
    });

};

function handleInternQuestions() {
    inquirer.prompt(engineerQuestions) 
    .then(function(response) {
        
         addEmployee()
        
    });

};







// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


//__________________________________________________________________________________________________
//Pseudo Code

//your challenge is to build a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person

// prompt user for information about team manager

//prompt user to add engineer/intern
    //if user adds an engineer
    //prompt user to add informaiton about the engineer

//prompt user to add engineer/intern
    //if user adds an intern
    //prompt user to add informaiton about the intern

//once user has entered in all employees
    //create an HTML file based on user input of provided employee info    
