// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![License Badge](https://img.shields.io/badge/License-${license}-orange)`
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `* [License](#license)`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
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
* [Require](#require)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributors](#contributors)
* [Testing](#testing)
* [Installation](#installation)
* [Questions](#questions)
## Description
${data.description}
## Requirements
${data.require}
## Installation
${data.install}
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contact-Me
- Name: ${data.name}
- Email: ${data.email}
- GitHub Username:  ${data.creator}
- GitHub Link: ${data.link}
## Testing
${data.test}
## Contributors
${data.contributors}
## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
