const fs = require ("fs");
const inquirer = require ("inquirer")
const generateHTML = require ("")

const Employee = require("./lib/Employee")
Const Manager = require ("./lib/Manager")
Const Engineer = require ("./lib/Engineer")
Const Intern = require ("./lib/Intern")

// All the questions for the different team members
const managerQuestions [
    {
        type = "input",
        name = "managerName",
        message = "Please enter the Manager's name."
    },

    {
        type = "input",
        name = "managerID",
        message = "Please enter the Manager's ID."
    },

    {
        type = "input",
        name = "managerNumber",
        message = "Please eneter the Manager's office number."
    },

];

const engineersQuestions [
    {
        type = "input",
        name = "EngineerName",
        message = "Please enter the engineer's name."
    },
    {
        type = "input",
        name = "engineerID",
        message = "Please enter the engineer's ID"
    },
    {
        type = "input",
        name = "engineerGithub",
        message = "Please enter the engineer's Github."
    },
];

const internQuestions [
    {
        type = "input",
        name = "internName",
        message = "Please enter the intern's name."
    },
    {
        type = "input",
        name = "internID",
        message = "Please enter the intern's email."
    },
    {
        type = "input",
        name = "internSchool",
        message = "Please enter the intern's school."
    },
];

const nextMember [
    {
        type = "input",
        name = "nextMember",
        message = "What is your next action? Please select from the following."
        choices = ["Add engineer", "Add intern", ["Create team"]]
    },
];



