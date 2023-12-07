//  packages
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");


// user input questions
const questions = [
  {
    type: "input",
    message: "What is the project title?",
    name: "title"
  },
  {
    type: "text",
    message: "What is the project description?",
    name: "description"
  },
  {
    type: "text",
    message:
      "What are the steps required to install your project? Provide a step-by-step description. If no installation is required, type N/A.",
    name: "installation"
  },
  {
    type: "text",
    message: "How does the user put your application to use? Provide instructions and/or examples.",
    name: "usage"
  },
  {
    type: "list",
    message: "Choose a license for your project:",
    choices: ["No License", "Apache", "IBM", "MIT", "Perl"],
    name: "license"
  },
  {
    type: "text",
    message: "Are there any project contributors? If none, type N/A.",
    name: "contribution"
  },
  {
    type: "text",
    message:
      "Write tests for your application and provide examples on how to run them here. If none, type N/A.",
    name: "test"
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username"
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email"
  },
];

// function to create README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    if (err) throw err;
    console.log("complete!");
  });
}

// app initialization function
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("./output/README.md", data);
  });
}

// Function call
init();
