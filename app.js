// dependencies
const inquirer = require("inquirer")
const fs = require("fs")
const classes = require("./lib/classes")

// getting classes from classes.js
let Employee = classes.employee;
let Manager = classes.manager;
let Engineer = classes.engineer;
let Intern = classes.intern;

// blank array of team members to use with building HTML
let teamArray = [];
//blank html string to be added to later
let usefulHTML = "";

//inquirer question chains 

// default question asked first
defaultQuestion = [
    {
        message: "What type of team member would you like to add?",
        type: "list",
        name: "profession",
        choices: ["intern","employee","manager","engineer"]      
    }
]

// branch logic asks question for correct type of employee
employeeQuestions = [
    {   
        message:"What is the employee's name?",
        name:"name",
        type:"input"
    },
    
    {
        message:"What is the employee's email?",
        name:"email",
        type:"input"
    },
    
    {
        message:"What is the employee's ID?",
        name:"id",
        type:"input"
    },
    {
        message: "Would you like to continue adding employees?",
        type: "list",
        name: "continue",
        choices: ["yes","no"]      
    }
    
]

managerQuestions = [
    {   
        message:"What is the manager's name?",
        name:"name",
        type:"input"
    },
    
    {
        message:"What is the manager's office number?",
        name:"officeNumber",
        type:"input"
    },
    
    {
        message:"What is the manager's ID?",
        name:"id",
        type:"input"
    },

    {
        message: "What is the manager's email?",
        name:"email",
        type: "imput"
    },
    {
        message: "Would you like to continue adding employees?",
        type: "list",
        name: "continue",
        choices: ["yes","no"]      
    }
]

internQuestions = [
    {   
        message:"What is the intern's name?",
        name:"name",
        type:"input"
    },
    
    {
        message:"What school does the intern attend?",
        name:"school",
        type:"input"
    },
    
    {
        message:"What is the employee's ID?",
        name:"id",
        type:"input"
    },

    {
        message: "What is the intern's email?",
        name:"email",
        type: "imput"
    },
    {
        message: "Would you like to continue adding employees?",
        type: "list",
        name: "continue",
        choices: ["yes","no"]      
    }
]

engineerQuestions = [
    {   
        message:"What is the engineer's name?",
        name:"name",
        type:"input"
    },
    
    {
        message:"What is the engineer's gitHub?",
        name:"github",
        type:"input"
    },
    
    {
        message:"What is the engineer's ID?",
        name:"id",
        type:"input"
    },

    {
        message: "What is the engineer's email?",
        name:"email",
        type: "imput"
    },
    {
        message: "Would you like to continue adding employees?",
        type: "list",
        name: "continue",
        choices: ["yes","no"]      
    }
]

//inquirer prompt
let employeePrompt = function(){ inquirer.prompt(defaultQuestion)
.then(function(response){
    // question set logic & object creation
    if (response.profession == "intern"){
        inquirer.prompt(internQuestions).then(function(res){
            teamArray.push(new Intern(res.name, res.id, res.email, res.school))
            if (res.continue == "yes"){
                employeePrompt()
            }
    })}

    else if (response.profession == "manager"){
        inquirer.prompt(managerQuestions).then(function(res){
            teamArray.push(new Manager(res.name, res.id, res.email, res.officeNumber))
            if (res.continue == "yes"){
                employeePrompt()
            }
    })}

    else if (response.profession == "engineer"){
        inquirer.prompt(engineerQuestions).then(function(res){
            teamArray.push(new Engineer(res.name, res.id, res.email, res.github))
            if (res.continue == "yes"){
                employeePrompt()
            }
    })}

    else{
        inquirer.prompt(employeeQuestions).then(function(res){
            teamArray.push(new Employee(res.name, res.id, res.email))
            if (res.continue == "yes"){
                employeePrompt()
            }
    })}   
})
}
employeePrompt()

//html generation loop
let htmlGen;
//write html to file
let writeHTML;