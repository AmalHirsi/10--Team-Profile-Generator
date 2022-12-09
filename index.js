const fs = require("fs");
const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const newTeamMember = [];

function addEmployee() {
    inquirer.prompt([
        {
            type: "list",
            name: "nextEmployee",
            message: "Select which team member you would like to add",
            choices: ["Manager", "Engineer", "Intern", "Complete the team"]
        },
    ])
        .then(function (userInput) {
            switch (userInput.nextEmployee) {
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

function managerQuestions() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Please enter the Manager's name."
        },

        {
            type: "input",
            name: "managerID",
            message: "Please enter the Manager's ID."
        },

        {
            type: "input",
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
            newTeamMember.push(manager);
            addEmployee();
        })
}

function engineersQuestions() {
    inquirer.prompt([
        {
            type: "input",
            name: "EngineerName",
            message: "Please enter the engineer's name."
        },
        {
            type: "input",
            name: "engineerID",
            message: "Please enter the engineer's ID"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "Please enter the engineer's Github."
        },
    ])
        .then(answer => {
            const engineer = new Engineer
                (
                    answer.EngineerName,
                    answer.managerID,
                    answer.managerNumber,
                );
            newTeamMember.push(engineer);
            addEmployee();
        });
}

function internQuestions() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Please enter the intern's name."
        },
        {
            type: "input",
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
            const intern = new Intern
                (
                    answer.internName,
                    answer.internID,
                    answer.internSchool,

                );
            newTeamMember.push(intern);
            addEmployee();
        });
}

function buildTeam() {

    fs.writeFileSync('./dist/index.html', renderHTML(newTeamMember), (err) => {
    console.log (newTeamMember)
                if (err) {
                    if (err) throw err
                    console.log ("Your team has been created")

                }
            })
        }

addEmployee();

