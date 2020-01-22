
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

let employeeCard =
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



let internCard = 
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



let managerCard = 
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


let engineerCard = 
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


let endingHTML = 
`
</div>

    
</body>
</html>
`

module.exports = {
    initialHTML:initialHTML,
    endingHTML:endingHTML,
    engineerCard:engineerCard,
    employeeCard:employeeCard,
    internCard:internCard,
    managerCard:managerCard
}