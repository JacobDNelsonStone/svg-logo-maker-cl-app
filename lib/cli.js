

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
        choices: ['Ellipse', 'Rectangle', 'Circle']
      },

      {
        type: 'input',
        message: `Please type a color for your logo's shape.`,
        name: 'shapecolor',
      },
    ])
    .then((data) => {
      console.log(data.title, data.textcolor, data.shapecolor )
    })

}

module.exports = { cli };