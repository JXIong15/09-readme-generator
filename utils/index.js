// Include packages needed for this application
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
        message: 'What kind of lisence should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    // {
    //     type: 'input',
    //     name: 'install',
    //     message: 'What command should be run to install dependencies?',
    //     default: 'npm i'
    // },
    // {
    //     type: 'input',
    //     name: 'tests',
    //     message: 'What command should be run to run tests?',
    //     default: 'npm test'
    // },
    // {
    //     type: 'input',
    //     name: 'usage',
    //     message: 'What does the user need to know about using the repo?'
    // },
    // {
    //     type: 'input',
    //     name: 'contributing',
    //     message: 'What does the user need to know about contributing to the repo?',
    // }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let rm = fs.writeFileSync(path.join(process.cwd(), fileName), data)
    if(err) {
        console.log(err);
    }
    console.log("Your README has been generated!");
    return rm;
}

// Initializes app by prompting the questions for the desired ReadMe file.
function init() {
    inquirer.prompt(questions).then((responses) => {
        writeToFile("README.md", generateMarkdown);
        // console.log(responses);
    })
}

// Function call to initialize app
init();