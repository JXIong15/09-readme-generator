// Returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  let badge;
  switch(license) {
    case "MIT":
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case "APACHE 2.0":
      badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case "GPL 3.0": 
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case "BSD 3": 
      badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case "None": 
      badge = "";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section;
  switch(license) {
    case "MIT":
      section = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case "APACHE 2.0":
      section = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case "GPL 3.0": 
      section = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case "BSD 3": 
      section = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case "None": 
      section = "";
  }
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  renderLicenseBadge(data.license)

  ## Description
  ${data.description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#test)
  * [Questions](#questions)
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}
  
  ## License


  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions
  For further questions, contact me here: ${data.email}`;
  }

module.exports = generateMarkdown;
