const { Circle } = require('./lib/shapes');
const { Rectangle } = require('./lib/shapes');
const { Ellipse } = require('./lib/shapes');
const fs = require('fs');
const inquirer = require('inquirer');


function init() {
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
        name: 'text-color',
      },

      {
        type: 'list',
        message: 'Please select a shape for your logo from this list.',
        name: 'shape',
        choices: ['Ellipse', 'Rectangle', 'Circle']
      },

      {
        type: 'input',
        message: `Please type a color for your logo's shape.`,
        name: 'shape-color',
      },


    ])


}

init();