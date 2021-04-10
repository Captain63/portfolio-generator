// Inquirer logic goes here
const inquirer = require('inquirer');

const mapQA = new Map();

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is your location?',
        name: 'location'
    },
    {
        type: 'input',
        message: 'What is your GitHub URL?',
        name: 'gitURL'
    }
])
    .then((response) => {
        mapQA.set('name', response.name);
        mapQA.set('location', response.location);
        mapQA.set('gitURL', response.gitURL);
        
        //Remaining steps go here...
    })
    .catch(error => {
        console.log(error);
    });

// HTML string logic goes here

// FS logic goes here
// Imports fs system
const fs = require(fs);

// REPLACE htmlString with whatever variable is created
fs.writeFile("index.html", htmlString, (err) => {
    err ? console.error(err) : console.log('File created successfully.');
});