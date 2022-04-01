/*GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README*/
var fs = require('fs');
var path = require('path');
var inquirer = require('inquirer');
var template = require("./utils/generateMarkdown.js")


// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your projects title?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a brief description of your project:"
    },
    {
        type: "input",
        name: "toc",
        message: "Enter your Table of Contents:",
    },
    {
        type: "input",
        name: "installation",
        message: "Give instructions on how to install your project:",

    },
    {
        type: "input",
        name: "usage",
        message: "What is your project used for?",

    },
     {
        type: "list",
        name: "license",
        message: "What licenses does your project have?",
        choices: ['N/A', 'MIT', 'ISC']

     },
    {
        type: "input",
        name: "contributing",
        message: "How can someone contribute to this project?",

    },
    {
        type: "input",
        name: "test",
        message: "Enter your test code here:",

    },
    {
        type: "confirm",
        name: "questions",
        message: "Do you have any questions?",
        default: ['Yes', 'No']

    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join('./develop', fileName), data)
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers)
                writeToFile('README.md', template({ ...answers }))
            
            // Use user feedback for... whatever!!

        })
}

// Function call to initialize app
init();





