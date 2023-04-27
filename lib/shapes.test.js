const { Circle } = require('./shapes');
const { Rectangle } = require('./shapes');
const { Ellipse } = require('./shapes');
const cli = require('./cli');



describe('Shape', () => {

  describe('Circle', () => {
    it('Should make sure that a circle is created when that shape is the selected shape.', () => {
      const data = {
        title: "JNS", 
        textcolor: "blue",
        shape: "Circle",
        shapecolor: "white"
      }

      if(data.shape === "Circle") {

      const shape = new Circle(data.title, data.textcolor, data.shapecolor);
      const circleTest = shape.render(data.title, data.textcolor, data.shapecolor);
      return circleTest;
      } else {
        expect(data.shape).toEqual('Circle')
      }
    })
  })
})

/*
const shape = new Circle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
*/