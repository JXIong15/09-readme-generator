// Included packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./generateMarkdown");

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'year',
        message: 'What is year is it?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of licence should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What does the user need to know about contributing to the repo?',
    }
];

// Writes README file
function writeToFile(fileName, data) {
    try {
        let rm = fs.writeFileSync(path.join(process.cwd(), fileName), data)
        console.log("Your README has been generated!");
        return rm;
    }
    catch {
        return console.log("README Generator failed.");
    }
}

// Initializes app by prompting the questions for the desired ReadMe file.
function init() {
    inquirer.prompt(questions).then((responses) => {
        writeToFile("README.md", generateMarkdown(responses));
    })
}

// Function call to initialize app
init();