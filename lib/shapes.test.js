const {Triangle, Circle, Square} = require('./shapes');

describe('Test Triangle', () => {
    test('should return a red triangle', () => {
        const triangle = new Triangle('red');
        expect(triangle.render()).toBe('<polygon points="150,50 100,150 200,150" fill="red"/>');
    });
});

describe('Test Circle', () => {
    test('should return a blue circle', () => {
        const circle = new Circle('blue');
        expect(circle.render()).toBe('<circle cx="150" cy="100" r="50" fill="blue"/>');
    });
});

describe('Test Square', () => {
    test('should return a green square', () => {
        const square = new Square('green');
        expect(square.render()).toBe('<rect x="75" y="50" width="150" height="100" fill="green"/>');
    });
});

