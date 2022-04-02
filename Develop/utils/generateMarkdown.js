// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 


  let yourLicense = ''
  if (license === 'MIT') {
    yourLicense = `![license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license === 'ISC') {
    yourLicense = `![license: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)`
  } else if ( license === '') {
    yourLicense = `['']`;
  }
    return yourLicense;
  };
  


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {


  let licenseLink = ''
  if (license === 'MIT') {
    licenseLink = `[license: MIT](https://choosealicense.com/licenses/mit/)`;
  } else if (license === 'ISC') {
    licenseLink = `[license: ISC](https://choosealicense.com/licenses/isc/)`;
  } else if (license === '') {
    licenseLink = `['']`;
  }
  return licenseLink;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  let licenseSection = '' 
  if (license === 'MIT') {
    licenseSection = `MIT License

    Copyright (c) [year] [fullname]
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.`;
  } else if (license === 'ISC') {
    licenseSection = `ISC License

    Copyright (c) [year] [fullname]
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted, provided that the above
    copyright notice and this permission notice appear in all copies.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.`;
  } else if (license === '') {
    licenseSection = ['']
  };
  return licenseSection;
};

// Creates a function to generate a github link with your entered username
function generateGithub(github) {
  let userGithub = `[${github}](https://github.com/${github})`
  return userGithub;
}

// This function is used to generate an email address for people to contribute and ask questions
function generateEmail(email) {
  let userEmail = `<${email}>`
  return userEmail;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)} 
  # ${data.title}  

  ## Table of Contents
   1. [Description](#Description)
   2. [Installation](#Installation)
   3. [Usage](#Usage)
   4. [License](#License)
   5. [Contribute](#Contribute)
   6. [Test](#Test)
   7. [Questions](#Questions) 

  ## Description  
  ${data.description}  

  ## Installation
  ${data.installation}  

  ## Usage
  ${data.usage}  

  ## License
  ${renderLicenseLink(data.license)}  

  ${renderLicenseSection(data.license)}  

  ## Contribute
  ${data.contributing}  

  ## Test
  ${data.test}  

  ## Questions
  ${generateGithub(data.github)}  
  
  ${generateEmail(data.email)}
`;
}

module.exports = generateMarkdown;
