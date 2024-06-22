// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];



// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
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

    },{
        type: 'input',
        name: 'contribution',
        message: 'Give contribution guidelines',

    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((answers) => {
    console.log(answers);
    writeToFile('README.md', answers);
  });

}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, formatReadMe(data) ,(err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

function formatReadMe(data){

let returnFile =  `# ${data.title}

## Description
`
const licenseArray = data.license;
console.log(licenseArray);
licenseArray.forEach(license => {
    returnFile += ` <a src = "" alt="Contributors">\n<img src= https://img.shields.io/badge/${license}-8A2BE2 /></a>\n`
});



returnFile += 
`\n ${data.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)

## Installation

${data.installation}




## Usage

${data.usage}


## License`

console.log(licenseArray);
licenseArray.forEach(license => {
    returnFile += `${license} has license to this program\n`
});



returnFile += `
## Contributing


## Tests


## Questions
Link to gitHub: 
Link to E-mail: 
`



return returnFile;
}

// Function call to initialize app
init();







