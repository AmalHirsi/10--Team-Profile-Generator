const fs = require ("fs");
const inquirer = require ("inquirer");
const generateHTML = require ("");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require ("./lib/Engineer");
const Intern = require ("./lib/Intern");
const { addListener } = require("process");



const managerQuestions = [
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
        message: "Please eneter the Manager's office number."
    },

];

const engineersQuestions = [
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
];

const internQuestions = [
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
];

const addEmployee = [
    {
        type: "list",
        name: "nextEmployee",
        message: "Select which team member you would like to add",
        choices: ["Manager", "Engineer", "Intern", "Complete the team"]
    },
];

function buildTeam () {
    inquirer.prompt(addEmployee)
    .then(function (userInput) {
        switch(userInput.nextEmployee){
            case "Manager":
                addManager;
                break
            case "Engineer":
                addEngineer;
                break
            case "Intern":
                addIntern; 
                break;
        }
    })
}

 function addManager() {
    inquirer.prompt (managerQuestions)
    .then(answer => {
        const manager = new Manager
        (
            answer.managerName,
            answer.managerID,
            answer.managerNumber,
        );
        teamArray.push(manager)
        buildTeam();
    });
 }

function addEngineer() {
    inquirer.prompt(engineersQuestions)
    .then(answer => {
                const engineer = new engineer
        (
            answer.EngineerName,
            answer.managerID,
            answer.managerNumber,
       );
       teamArray.push(engineer);
       buildTeam();

     });
            
 }
    function addIntern() {
       inquirer.prompt(internQuestions)
       .then(answer => {
        const intern = new intern
        (
            answer.internName,
            answer.internID,
            answer.internSchool,

            );
            teamArray.push(intern);
            buildTeam();
     
        });
    }

function generateHTML() {
    console.log("Your team has been created")
  fs.writeFile(outputPath, render(team), "utf-8");  
  process.exit(0);
}

init();