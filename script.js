const inquirer = require('inquirer');
const fs = require('fs');


inquirer
.prompt([
    {
        type: 'input',
        name: 'test',
        message: 'Choose up to 3 characters:',
        validate: function (input) {
            return input.length <= 3 ? treu : 'You have to choose 3 or less characters';
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Pick a color for the text:'
    },
    {
        type: 'list',
        name: 'shapeColor',
        message: 'Pick a shape:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Pick the shape color:'
    }
])
.then(answers => {
    
})