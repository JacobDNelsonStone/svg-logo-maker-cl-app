const { Circle } = require('./shapes');
const { Square } = require('./shapes');
const { Triangle } = require('./shapes');
const cli = require('./cli');

describe('Shape', () => {

  describe('Circle', () => {
    it('Should make sure that a circle is created when that shape is the instantiated class.', () => {

      let mockShape = new Circle();
    
        expect(mockShape.render('JNS', 'black', 'white')).toEqual(`<svg version='1.1' width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r='100' fill='white'/><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">JNS</text></svg>`)
      }
    )
  })
})

describe('Shape', () => {

  describe('Square', () => {
    it('Should make sure that a square is created when that shape is the instantiated class.', () => {

      let mockShape = new Square();
    
        expect(mockShape.render('JNS', 'black', 'white')).toEqual(`<svg version='1.1' width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" rx="0" ry="0" width="300" height="300" fill='white'/><text x="150" y="125" font-size="80" text-anchor="middle" fill="black">JNS</text></svg>`)
      }
    )
  })
})

describe('Shape', () => {

  describe('Triangle', () => {
    it('Should make sure that a Triangle is created when that shape is the instantiated class.', () => {

      let mockShape = new Triangle();
    
        expect(mockShape.render('JNS', 'black', 'white')).toEqual(`<svg version='1.1' width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="0 200, 150 0, 300 200" fill='white'/><text x="150" y="150" font-size="60" text-anchor="middle" fill="black">JNS</text></svg>`)
      }
    )
  })
})

