// dependencies
const inquirer = require("inquirer")
const fs = require("fs")
const classes = require("./lib/classes")
//const templates = require("./lib/templates")
// getting classes from classes.js
let Employee = classes.employee;
let Manager = classes.manager;
let Engineer = classes.engineer;
let Intern = classes.intern;
//these variables will be cocatenated in order to create the output string
let initialHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link rel="stylesheet" href="./assets/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/style.css">
</head>
<body>
    <div id = "header">
        My Team
    </div>
    <div class = card-wrapper>
`
let endingHTML;
let engineerCard;
let employeeCard;
let internCard;
let managerCard;


let templateInit = function(teamArray, i){
    //templates from templates.js



employeeCard =
`
<div class = "card"> 
            <div class = "card-head">
                <h4 class = "card-title">${teamArray[i].name}</h4>
                <h5 class = "card-title">Employee</h5>
            </div>
            <ul class = "list-group">
                <li class="list-group-item">ID: ${teamArray[i].id}</li>
                <li class="list-group-item">Email: ${teamArray[i].email}</li>
            </ul>
        </div>
`



internCard = 
`
<div class = "card"> 
            <div class = "card-head">
                <h4 class = "card-title">${teamArray[i].name}</h4>
                <h5 class = "card-title">Intern</h5>
            </div>
            <ul class = "list-group">
                <li class="list-group-item">ID: ${teamArray[i].id}</li>
                <li class="list-group-item">Email: ${teamArray[i].email}</li>
                <li class="list-group-item">School: ${teamArray[i].school}</li>
            </ul>
        </div>
`



managerCard = 
`
<div class = "card"> 
            <div class = "card-head">
                <h4 class = "card-title">${teamArray[i].name}</h4>
                <h5 class = "card-title">Manager</h5>
            </div>
            <ul class = "list-group">
                <li class="list-group-item">ID: ${teamArray[i].id}</li>
                <li class="list-group-item">Email: ${teamArray[i].email}</li>
                <li class="list-group-item">Office Number: ${teamArray[i].officeNumber} </li>
            </ul>
        </div>
`


engineerCard = 
`
<div class = "card"> 
            <div class = "card-head">
                <h4 class = "card-title">${teamArray[i].name}</h4>
                <h5 class = "card-title">Engineer</h5>
            </div>
            <ul class = "list-group">
                <li class="list-group-item">ID: ${teamArray[i].id} </li>
                <li class="list-group-item">Email: ${teamArray[i].email}</li>
                <li class="list-group-item">GitHub: ${teamArray[i].github}</li>
            </ul>
        </div>

`


endingHTML = 
`
</div>

    
</body>
</html>
`

}


// blank array of team members to use with building HTML
let teamArray = [];

// html string to be filled later
let outputHTML;

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
//html generation loop
let htmlGen = function(){
    outputHTML = initialHTML
    for (let i = 0; i < teamArray.length; i++){
        templateInit(teamArray, i)
        if (teamArray[i].getRole() == "Manager"){
            outputHTML += managerCard
        }
        else if(teamArray[i].getRole() == "Engineer"){
            outputHTML += engineerCard
        }
        else if(teamArray[i].getRole() == "Intern"){
            outputHTML += internCard
        }
        
        else{
            outputHTML += employeeCard
        }
    }
    outputHTML += endingHTML
    //console.log(outputHTML)
    fs.writeFile("./output/team-roster.html", outputHTML, function(err){
        if (err){
            console.log(err)
        }
        else{
            console.log("Success!")
        }
    })

}

//inquirer prompt
let employeePrompt = function(){ inquirer.prompt(defaultQuestion)
    .then(function(response){
        // question set logic & object creation
        if (response.profession == "intern"){
            inquirer.prompt(internQuestions).then(function(res){
                teamArray.push(new Intern(res.name, res.id, res.email, res.school))
                //console.log(teamArray)
                if (res.continue == "yes"){
                    employeePrompt()
                }
                else{
                    htmlGen()
                }
        })}

        else if (response.profession == "manager"){
            inquirer.prompt(managerQuestions).then(function(res){
                teamArray.push(new Manager(res.name, res.id, res.email, res.officeNumber))
                if (res.continue == "yes"){
                    employeePrompt()
                }
                else{
                    htmlGen()
                }
        })}

        else if (response.profession == "engineer"){
            inquirer.prompt(engineerQuestions).then(function(res){
                teamArray.push(new Engineer(res.name, res.id, res.email, res.github))
                if (res.continue == "yes"){
                    employeePrompt()
                }
                else{
                    htmlGen()
                }
        })}

        else{
            inquirer.prompt(employeeQuestions).then(function(res){
                teamArray.push(new Employee(res.name, res.id, res.email))
                if (res.continue == "yes"){
                    employeePrompt()
                }
                else{
                    htmlGen()
                }
        })}   
    })
}

// CLI to populate team array
employeePrompt()


