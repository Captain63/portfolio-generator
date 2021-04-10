// Inquirer logic goes here

// HTML string logic goes here
const htmlString = 
`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UFT-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio Generator</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="profile">Profile</div>
        // UPDATE key names to ensure match
        <p>Test 1</p>
        <p>Test 2</p>
    </body>
</html>`;

// FS logic goes here
// Imports fs system
const fs = require('fs');

// REPLACE htmlString with whatever variable is created
fs.writeFile("index.html", htmlString, (err) => {
    err ? console.error(err) : console.log('File created successfully.');
});