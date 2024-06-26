// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Title of the project: ',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Give desctiption: ',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Give explanation for installation',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Give expalnation of usage',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Give list of licenses',
        choices: [ 'Google', 'Amazon', 'Meta','Netflix', 'Nvidia' ],

    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Give contribution guidelines',

    },
    {
        type: 'input',
        name: 'test',
        message: 'Give testing guidelines',

    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your Email adress',
    },
  ];

// Make an array of license badges for future use
let badgeArray =[
    {company: 'Google', link: 'https://www.google.com'},
    {company: 'Amazon', link: 'https://www.amazon.com'},
    {company: 'Meta', link: 'https://www.google.com'},
    {company: 'Netflix', link: 'https://meta.com'},
    {company: 'Nvidia', link: 'https://nvidia.com'}
  


]

//This method returns the url of the license company using badgeArray.
function getCompanyUrl(license){
    let reurnLink = ''
    badgeArray.forEach((licenseCompany) =>{
        if(licenseCompany.company === license){

            returnLink = licenseCompany.link;
        }
    })
    return returnLink
};

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((answers) => {
    writeToFile('README_Generated.md', answers);
  });

}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, formatReadMe(data) ,(err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// Helper method of writeToFile function. it formats readme file.
function formatReadMe(data){

let returnFile =  `# ${data.title}

## Description
`

// Adds badges right below the description section. 
const licenseArray = data.license;
licenseArray.forEach(license => {
    let companyUrl = getCompanyUrl(license);
    console.log(companyUrl);
    returnFile += ` <a href = "${companyUrl}" alt="Contributors">\n<img src= https://img.shields.io/badge/${license}-8A2BE2 /></a>\n`
});

// After adding badges, add rest of the readme file contents
returnFile += 
`\n ${data.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)


## Installation

${data.installation}


## Usage

${data.usage}


## License \n`

//Add the licenses to license section.
licenseArray.forEach(license => {
    returnFile += `${license} has license to this program\n\n`
});


// Continue adding readme
returnFile += `
## Contributing

${data.contribution}


## Tests

${data.test}


## Questions
Github Repo: [${data.github}](https://github.com/${data.github})\n
Please reach out via E-mail on: ${data.email} 
`
//Readme formatting done.

// Return the formatted text
return returnFile;
}

// Function call to initialize app
init();







