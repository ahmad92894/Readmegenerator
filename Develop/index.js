// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown= require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [];
// Table of Contents, 
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
    // {
    //   type: 'input',
    //   name: 'usage',
    //   message: 'What is it used for?',
    // },
    // {
    //   type: 'input',
    //   name: 'licenses',
    //   message: 'what license do you have?',
    //   choices:'',
    // },
    // {
    //   type: 'input',
    //   name: 'contributing',
    //   message: 'any contributions',
    // },
    // {
    //     type: 'input',
    //     name: 'tests',
    //     message: 'what did you test?',
        
    //   },
    //   {
    //     type: 'input',
    //     name: 'questions',
    //     message: 'any questions',
    //   },
  ])

  .then((response) => {
    fs.writeFile('README.md', generateMarkdown(response), (err) =>
      err ? console.log(err) : console.log('Successfully created readme!')
    )
  });





// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
