class Circle {
  constructor(shape, color, title ) {
    this.shape = shape;

  }

  render(shape, color){
    return `<circle cx="25" cy="75" r="20"/>`
  }
}

class Rectangle {
  constructor(shape, color, title ){
    this.shape = shape;
  }

  render(shape, color){
    return `<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>`
  }
}

class Ellipse {
  constructor( shape, color, title ){
    this.shape = shape;
  }

  render(shape, color){
    return `<ellipse cx="75" cy="75" rx="20" ry="5"/>`
  }
}

module.exports = { 
  Circle, 
  Rectangle, 
  Ellipse 
};