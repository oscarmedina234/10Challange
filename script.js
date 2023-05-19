const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('./shapes');

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
    const { text, textColor, shape shapeColor} = answers;

    let shapeElement;

    if(shape === 'circle') {
        const circle = new Circle(shapeColor);
        shapeElement = circle.render();
    } else if (shape === 'triangle') {
        const triangle = new Triangle(shapeColor);
        shapeElement = triangle.render();
    } else if (shape === 'square') {
        const square = new Square(shapeColor);
        shapeElement = square.render();
    }
    const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
    ${shapeElement}
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text> </svg>`;

    fs.writeFileSync('logo.svg', svgCode);
    console.log('Logo.svg is being generated');
})
.catch(error => {
    console.error('There was an Error', error);
});