const fs = require("fs");
const inquirer = require("inquirer");
const index = require("../index");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license === "MIT") {
    badge =
      "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "Apache 2.0") {
    badge =
      "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  } else {
    badge = "";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "MIT") {
    licenseLink = "https://opensource.org/licenses/MIT";
  } else if (license === "Apache 2.0") {
    licenseLink = "https://opensource.org/licenses/Apache-2.0";
  } else {
    licenseLink = "";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
  if (license === 'None') {
      licenseSection = '';
  } else {
      licenseSection = `License: ${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}
    
  ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}


  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Description 
  ${data.description}

  ## Installation 
  ${data.install}
  
  ## Usage 
  ${data.usage}
  
  ## License 
  This project is license under ${data.license}
  
  ## Contributing 
  ${data.contributors}
  
  ## Tests
  ${data.test}
  
  ## Questions
  If you have any questions about this projects, please contact me at ${
    data.email
  }. You can view more of my projects at https://github.com/${data.github}.
`;
};

module.exports = generateMarkdown;
