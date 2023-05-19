
//inquirer package to prompt questions. https://www.educative.io/answers/how-to-use-the-inquirer-node-package
// fs package to write to file system.
const inquirer = require('inquirer');
const fs = require('fs');

// Prompt the user for information.
inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'Enter the title of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause'],
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ])
  .then((answers) => {
    // Generates the README content.  Followed README template.  Variable 'answers' to each string in each section.
    const readmeContent = `# ${answers.projectTitle}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions or concerns, please contact me:
- GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
- Email: ${answers.email}
`;

    //Uses const readmeContent to write to README.md and console.log when successful.
    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md file generated successfully!');
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
