const { Circle } = require('./shapes');
const { Square } = require('./shapes');
const { Triangle } = require('./shapes');
const fs = require('fs');
const inquirer = require('inquirer');


function generateShape(data) {
  console.log(data.shape);
  let newShape = '';

  if (data.shape == 'Triangle') {
    newShape = new Triangle(data.title, data.textcolor, data.shapecolor)
    newShape = newShape.render(data.title, data.textcolor, data.shapecolor);
    return newShape;
  } else if (data.shape == 'Square') {
    newShape = new Square(data.title, data.textcolor, data.shapecolor)
    newShape = newShape.render(data.title, data.textcolor, data.shapecolor)
    return newShape;
  } else if (data.shape == 'Circle') {
    newShape = new Circle(data.title, data.textcolor, data.shapecolor)
    newShape = newShape.render(data.title, data.textcolor, data.shapecolor)
    return newShape;
  }

}

function writeSvgFile( newShape) {
  // const filename = `${data.title}sample.svg`;
  // console.log(filename);

  fs.writeFile('sampleSVG.svg', newShape, null, (error) =>
    error ? console.error(error) : console.log("success"));
}

function cli() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'Please type up to three characters as a title for your logo.',
        name: 'title',
      },

      {
        type: 'input',
        message: 'Please enter a color for your text.',
        name: 'textcolor',
      },

      {
        type: 'list',
        message: 'Please select a shape for your logo from this list.',
        name: 'shape',
        choices: ['Triangle', 'Square', 'Circle']
      },

      {
        type: 'input',
        message: `Please type a color for your logo's shape.`,
        name: 'shapecolor',
      },
    ])
    .then((data) => {
      console.log(data.title, data.textcolor, data.shape, data.shapecolor);

      const finishedShape = generateShape(data);
      writeSvgFile( finishedShape )

    })

}

module.exports = { cli };