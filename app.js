const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output"); //make this folder if it does not exist
const outputPath = path.join(OUTPUT_DIR, "team.html"); //

const teamMembers = [];
//const idArray = [];

const render = require("./lib/htmlRenderer");


const managerQuestions = [ // array of questions for user
    {
    type: "input",
    message: "What is the name of the manager?", //question 
    name: "name", //variable name
    },
    {
    type: "input", 
    message: "Please provide the manager id number: ", //question 
    name: "id", //variable name
    },
    {
    type: "input", 
    message: "Please enter the manager email: ", //question 
    name: "email", //variable name
    },
    {
    type: "input", 
    message: "Please enter manager office number: ", //question 
    name: "officeNumber", //variable name
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
    name: "name", //variable name
    },
    {
    type: "input", 
    message: "Please provide the engineer id number: ", //question 
    name: "id", //variable name
    },
    {
    type: "input", 
    message: "Please enter the engineer email: ", //question 
    name: "email", //variable name
    },
    {
    type: "input", 
    message: "Please enter engineer GitHub username: ", //question 
    name: "github", //variable name
    },

];
const internQuestions = [ // array of questions for user
    {
    type: "input",
    message: "What is the name of the intern?", //question 
    name: "name", //variable name
    },
    {
    type: "input", 
    message: "Please provide the intern id number: ", //question 
    name: "id", //variable name
    },
    {
    type: "input", 
    message: "Please enter the intern email: ", //question 
    name: "email", //variable name
    },
    {
    type: "input", 
    message: "Please enter intern school name: ", //question 
    name: "school", //variable name
    },

];

function handleManagerQuestions() { //function to handle all of manager questions

    inquirer.prompt(managerQuestions) 
    .then(function(response) {
        const newManager = new Manager(response.name, response.id, response.email, response.officeNumber)
        teamMembers.push(newManager);

        //console.log(managerresponse)
        addEmployee(); //directing manager to add employee 
        
    });
};

handleManagerQuestions()


function addEmployee() { //function to handle user inputing different employees

    inquirer.prompt(employeeType) 
    .then(function(response) {
        
        if (response.employeeType === "Engineer") { //if enginneer is selected 
            handleEngineerQuestions();
        } 
        else if (response.employeeType === "Intern") { //if intern is selected 
            handleInternQuestions();
        }
        else { //no more employees to add, catch all
            console.log("Thank you for providing the employee information!")
            renderHTML();  //render HTML when done adding employees
        }
     
    });
};

function handleEngineerQuestions() { //function to handle user inputing enginner data
    inquirer.prompt(engineerQuestions) 
    .then(function(response) {

        const newEngineer = new Engineer(response.name, response.id, response.email, response.github)
        teamMembers.push(newEngineer);
        addEmployee();
        
    });

};

function handleInternQuestions() { //function to 
    inquirer.prompt(internQuestions) 
    .then(function(response) {

        const newIntern = new Intern(response.name, response.id, response.email, response.school)
        teamMembers.push(newIntern);
    
         addEmployee();
        
    });

};


function renderHTML() {

    if (!fs.existsSync(OUTPUT_DIR)) {  //if it does not exist we are going to make it 
        fs.mkdirSync(OUTPUT_DIR)
      }
    
    fs.writeFile(outputPath, render(teamMembers), "utf-8", function(err) {
        if (err) {
            console.log("Error!");
        }
        console.log("Success!");
    
    })

}

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

