// License Files
const fs = require("fs");
const path = require("path");

const generateMIT = require("./Licenses/MIT.js");
const generateGPL = require("./Licenses/GPL.js");
const generateApache = require("./Licenses/APACHE.js");
const generateBSD = require("./Licenses/BSD.js");

// Returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "MIT":
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case "APACHE 2.0":
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case "GPL 3.0": 
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case "BSD 3": 
      return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    case "None": 
      return"";
  }
}

// Returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "MIT":
      return 'https://opensource.org/licenses/MIT';
    case "APACHE 2.0":
      return 'https://opensource.org/licenses/Apache-2.0';
    case "GPL 3.0": 
      return'https://www.gnu.org/licenses/gpl-3.0';
    case "BSD 3": 
      return 'https://opensource.org/licenses/BSD-3-Clause';
    case "None": 
      return "";
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  switch(data.license) {
    case "MIT": 
      return fs.writeFileSync(path.join(process.cwd(), "LICENSE"), generateMIT(data))
    case "APACHE 2.0":
      return fs.writeFileSync(path.join(process.cwd(), "LICENSE"), generateApache(data))
    case "GPL 3.0": 
      return fs.writeFileSync(path.join(process.cwd(), "LICENSE"), generateGPL(data))
    case "BSD 3": 
      return fs.writeFileSync(path.join(process.cwd(), "LICENSE"), generateBSD(data))
    case "None": 
      return "";
  }
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge = renderLicenseBadge(data.license);
  let link = renderLicenseLink(data.license);
  renderLicenseSection(data);
  console.log("Your License has been generated!")
  
return `[${data.license} License](LICENSE)`;
  return `# ${data.title}
  [${badge}](${link})

  ## Description
  ${data.description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Tests](#test)
  * [Questions](#questions)
  * [License](#license)
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions
  * To see more of my projects, check out my GitHub profile: [${data.username}](https://github.com/${data.username})
  * For further questions, contact me here: (mailto: ${data.email})
  
  ## License
  Licensed under the [${data.license} License](LICENSE)
  Copyright ©️ ${data.year}  ${data.username}`;
  }

// line 98:   ${lSection}

module.exports = generateMarkdown;
