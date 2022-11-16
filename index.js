const fs = require ("fs");
const inquirer = require ("inquirer");
const buildHTML = require ("");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require ("./lib/Engineer");
const Intern = require ("./lib/Intern");

const newTeamMember = [];


function managerQuestions() {
    inquirer.prompt([
    {
        type: "input",
        name: "managerName",
        message: "Please enter the Manager's name."
    },

    {
        type: "input",
        name:  "managerID",
        message:  "Please enter the Manager's ID."
    },

    {
        type:  "input",
        name: "managerNumber",
        message: "Please enter the Manager's office number."
    },
    ])
    .then(answer => {
        const manager = new Manager
        (
            answer.managerName,
            answer.managerID,
            answer.managerNumber,
        );
        teamMember.push(manager)
        newTeamMember();
        })
        }
        
       function addEmployee() {
           inquirer.prompt([
            {
                type: "list",
                name: "nextEmployee",
                message: "Select which team member you would like to add",
                choices: ["Manager", "Engineer", "Intern", "Complete the team"]
            },
        ]);
        inquirer.prompt(addEmployee)
    .then(function (userInput) {
        switch(userInput.nextEmployee){
            case "Manager":
                managerQuestions();
                break
            case "Engineer":
                engineersQuestions();
                break
            case "Intern":
                internQuestions(); 
                break
            case "Complete the team":
                buildTeam() 
                break  
        }
    });
}
function engineersQuestions() {
    inquirer.prompt([
    {
        type: "input",
        name:  "EngineerName",
        message:  "Please enter the engineer's name."
    },
    {
        type:  "input",
        name: "engineerID",
        message: "Please enter the engineer's ID"
    },
    {
        type:  "input",
        name: "engineerGithub",
        message:  "Please enter the engineer's Github."
    },
])
    .then(answer => {
                const engineer = new engineer
        (
            answer.EngineerName,
            answer.managerID,
            answer.managerNumber,
       );
       teamMember.push(engineer);
       newTeamMember();
     });            
 }

function internQuestions() {
    inquirer.prompt([
    {
        type: "input",
        name: "internName",
        message:  "Please enter the intern's name."
    },
    {
        type:  "input",
        name: "internID",
        message: "Please enter the intern's email."
    },
    {
        type: "input",
        name: "internSchool",
        message: "Please enter the intern's school."
    },
])
.then(answer => {
 const intern = new intern
 (
     answer.internName,
     answer.internID,
     answer.internSchool,

     );
     teamMember.push(intern);
     newTeamMember();

 });
}

function buildTeam() {
  fs.writeFile(outputPath, render(newTeamMember), "utf-8");  
  console.log("Your team has been created");
}

init();

