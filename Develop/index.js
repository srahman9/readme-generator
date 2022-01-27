//// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your project name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description of your project.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a description of your project!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should your project have?",
      choices: ["MIT", "Apache 2.0", "None"],
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please choose a license!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "install",
      message: "What are the steps required to install your project?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter steps required to install your project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use this app?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a description!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "test",
      message: "What command should be run to run tests?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the steps to run test!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "contributors",
      message:
        "What does the user need to know about contributing to the repo?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your email address!");
          return false;
        }
      },
    },
  ]);
};

// TODO: Create a function to write README file
const writeFile = (data) => {
  fs.writeFile("README.md", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Your README has been successfully created!");
    }
  });
};

// TODO: Create a function to initialize app
questions()
  .then((answers) => {
    return generatePage(answers);
  })
  .then((data) => {
    return writeFile(data);
  })
  .catch((err) => {
    console.log(err);
  });
