// TODO: Include packages needed for this application
const path=require("path")
const fs= require("fs")
const inquirer=require("inquirer")
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message: "Name of Project."
    },
    {
        type:"input",
        name: "description",
        message:"Describe the functionality and purpose of your project"
    },
    {
        type: "list",
        name: "license",
        message: "Select the license/licenses used for this project",
        choices: ["MIT","APACHE 2.0", "GPL 3.0","BSD 3","none"]
    },
    {
        type:"input",
        name: "require",
        message: "List project dependencies here."
    },
    {
        type: "input",
        name: "usage",
        message: "State the coding languages used in this project."
    },
    {
        type:"input",
        name: "creator",
        message:"Provide your GitHub username."
    },
    {
        type:"input",
        name:"name",
        message: "Enter your full name."
    },
    {
        type:"input",
        name:"email",
        message: "Enter your email address."
    },
    {
        type:"input",
        name:"contributors",
        message: "Enter any contributers and their GitHub usernames."
    },

];

 // TODO: Create a function to initialize app
function writeToFile(fileName,data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to write README file
function init() {
    inquirer.prompt(questions).then((responses)=>{
        writeToFile("README.md",generateMarkdown({...responses}))
    })
}

// Function call to initialize app
init();
