// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 


  let yourLicense = ''
  if (license=== 'MIT') {
    yourLicense = `![license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license=== 'ISC') {
    yourLicense = `![license: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)`
  } else if ( license === '') {
    yourLicense = `['']`;
  }
    return yourLicense;
  };
  


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description  
  ${data.description} 
  ## Table of Content
  ${data.tableOfContent}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseBadge(data.license)}
  ## Contribute
  ${data.contributing}
  ## Test
  ${data.test}
  ## Questions
  ${data.questions}
`;
}

module.exports = generateMarkdown;
