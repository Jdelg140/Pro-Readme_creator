// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if(license!=="none"){
  return `![License Badge](https://img.shields.io/badge/License-${license}-orange)`
}
return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license!=="none"){
    return `* [License](#license)`
  }
  return ""
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license!=="none"){
    return `## License
This project is licensed under the ${license} license.`
  }
  return ""
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} by ${data.name}
${renderLicenseBadge(data.license)}

## Table of Contents ##
* [Description](#description)
* [Requirements](#requirements)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contact-Me](#contact-me)
* [Contributors](#contributors)
* [Testing](#testing)
## Description
${data.description}
## Requirements
${data.require}
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contact-Me
- Name: ${data.name}
- Email: ${data.email}
- Github Username:  ${data.creator}
## Contributors
${data.contributors}
`;
}

module.exports = generateMarkdown;
