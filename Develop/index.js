
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown= require('./utils/generateMarkdown')

const questions = [];


inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is your Title?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'a description?',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'Installation process?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is it used for?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'what license do you have?',
      choices:['GNU GPLv3','GNU LGPLv3','Mozilla','MIT','Apache','none']
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'any contributions',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'what did you test?',
        
      },
      {
        type: 'input',
        name: 'questions',
        message: 'any questions',
      },
      {
        type: 'input',
        name: 'github',
        message: 'username',
        
      },
      {
        type: 'input',
        name: 'email',
        message: 'email',
      },
  ])

  .then((response) => {
    fs.writeFile('README.md', generateMarkdown(response), (err) =>
      err ? console.log(err) : console.log('Successfully created readme!')
    )
  });



