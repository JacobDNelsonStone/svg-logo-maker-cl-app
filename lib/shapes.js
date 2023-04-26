class Circle {
  constructor(shape, shapecolor, title, textcolor) {
    this.shape = shape;
    this.shapecolor = shapecolor;
    this.title = title;
    this.textcolor = textcolor
  }

  render() {
    return `<svg version='1.1' width="300" height="200"> <circle cx="25" cy="75" r="20" fill='${this.shapecolor}'/> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.title}</text> </svg>`
  }
}

class Rectangle {
  constructor(shape, color, title) {
    this.shape = shape;
    this.color = color; 
    this.title = title;
  }

  render() {
    return `<svg version='1.1' width="300" height="200"> <rect x="60" y="10" rx="10" ry="10" width="30" height="20" fill='${this.shapecolor}'/> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.title}</text> </svg>`
  }
}

class Ellipse {
  constructor(shape, color, title) {
    this.shape = shape;
    this.color = color;
    this.title = title;
  }

  render() {
    return `<svg version='1.1' width="300" height="200"> <ellipse cx="75" cy="75" rx="20" ry="5" fill='${this.shapecolor}'/> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.title}</text> </svg>`
  }
}

/*
<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
*/

module.exports = {
  Circle,
  Rectangle,
  Ellipse
};