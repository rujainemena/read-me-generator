//  packages
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");

/*

WHEN I choose a license for my application from a list of options -- will be a dropdown:
THEN a and a notice is added to the section of the README entitled License that explains which license the application is covered under


 */

// user input questions
const questions = [
  {
    type: "input",
    message: "What is the project title?",
    name: "title",
  },
  {
    type: "editor",
    message: "What is the project description?",
    name: "description",
  },
  {
    type: "editor",
    message:
      "What are the steps required to install your project? Provide a step-by-step description.",
    name: "installation",
  },
  {
    type: "editor",
    message: "Provide instructions and examples for your application use.",
    name: "usage",
  },
  {
    type: "list",
    message: "Choose a license for your project:",
    choices: ["No License", "Apache", "IBM", "MIT", "Perl"],
    name: "license",
  },
  {
    type: "editor",
    message:
      "Write tests for your application and provide examples on how to run them here.",
    name: "test",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err=>{
        if(err) throw err
        console.log("complete!");
    })
}

// app initialization function
function init() {
  inquirer.prompt(questions)
  .then(data=>{
    writeToFile("./output/README.md", data)
  })
}

// Function call
init();
