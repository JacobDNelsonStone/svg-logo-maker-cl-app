class Circle {
  constructor(title, textcolor, shapecolor ) {
    this.title = title;
    this.textcolor = textcolor
    this.shapecolor = shapecolor;
  }

  render(title, textcolor, shapecolor) {
    return `<svg version='1.1' width="300" height="200"><circle cx="150" cy="100" r='100' fill='${shapecolor}'/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${title}</text></svg>`
  }
}

class Rectangle {
  constructor(title, textcolor, shapecolor) {
    this.title = title;
    this.textcolor = textcolor;
    this.shapecolor = shapecolor;
  }

  render(title, textcolor, shapecolor) {
    return `<svg version='1.1' width="300" height="200"><rect x="0" y="0" rx="5" ry="5" width="300" height="200" fill='${shapecolor}'/><text x="150" y="125" font-size="80" text-anchor="middle" fill="${textcolor}">${title}</text></svg>`
  }
}

class Ellipse {
  constructor(title, textcolor, shapecolor) {
    this.title = title;
    this.textcolor = textcolor;
    this.shapecolor = shapecolor;
  }

  render(title, textcolor, shapecolor) {
    return `<svg version='1.1' width="300" height="200"><ellipse cx="100" cy="100" rx="300" ry="100" fill='${shapecolor}'/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${title}</text></svg>`
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