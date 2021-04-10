// Inquirer logic goes here

// HTML string logic goes here

// FS logic goes here
// Imports fs system
const fs = require(fs);

// REPLACE htmlString with whatever variable is created
fs.appendFile("index.html", htmlString, (err) => {
    err ? console.error(err) : console.log('File created successfully.');
});