const licenses = ["Apache", "GitHub", "GitLab", "Bower", "Cocoapods", "NPM"];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = [
    "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
    "https://img.shields.io/badge/License-MIT-green.svg",
    "https://img.shields.io/badge/License-MITLicense-green.svg",
    "https://img.shields.io/badge/License-MIT-green.svg",
    "https://img.shields.io/badge/License-MIT-black.svg",
    "https://img.shields.io/badge/License-MIT-green.svg",
  ];
  for (i = 0; i < licenses.length; i++) {
    if (license === "None of the above") {
      return "";
    } else if (license === licenses[i]) {
      return licenseBadges[i];
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return (
    `
  # ${data.title}
![License: ${data.license}](` +
    renderLicenseBadge(`${data.license}`) +
    `)
  ## Description
  
${data.description}

  ## Table of Contents
  
  -[Installation](#installation)   

  -[Usage](#usage) 

  -[License](#license)  

  -[Contributing](#contributing)   

  -[Tests](#tests)   

  -[Questions](#questions)  
  
  
  ## Installation
  
  ${data.install}

  ## Usage
    
${data.usage}

  ## License
  
  This application is covered under ${data.license}.

  ## Contributing
  
  My Collaborators:

${data.contibuting}

  ## Tests

${data.test}

  ## Questions

f you have any questions, please do not hesitate to reach out! 
GitHub: [github.com/${data.github}](https://github.com/${data.github})
Email: [${data.email}](mailto:${data.email})
`
  );
}

module.exports = generateMarkdown;
