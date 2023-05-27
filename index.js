// TODO: Include packages needed for this application
const package=require("inquirer")
const fs=require("fs")
// const path=require("path")

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message: "Name of Project."
    },
    {
        type:"input",
        name: "Description of project.",
        message:"Describe the functionality and purpose of your project"
    },
    {
        type: "checkbox",
        name: "license",
        message: "Select the license used fro this project",
        choices: ["MIT",]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
