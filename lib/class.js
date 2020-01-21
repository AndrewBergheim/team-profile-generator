let Employee = new class Employee{
    constructor(name, id, title, email="none provided"){
        this.name = name,
        this.id = id,
        this.title = title,
        this.email = email
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "employee"
    }

}

let Manager = new class Manager extends Employee{
    constructor(officeNumber, name, id, title, email){
        super(name, id, title, email)
        this.officeNumber = officeNumber
    }
    getRole(){
        return "Manager"
    }
    getOffice(){
        return this.officeNumber
    }
} 

let Engineer = new class Engineer extends Employee{
    constructor(github, name, id, title, email){
        super(name, id, title, email)
        this.github = github
    }
    getRole(){
        return "Engineer"
    }
    getGithub(){
        return this.github
    }
} 


let Intern = new class Intern extends Employee{
    constructor(school, name, id, title, email){
        super(name, id, title, email)
        this.school = school
    }
    getRole(){
        return "Intern"
    }
    getSchool(){
        return this.school
    }
} 