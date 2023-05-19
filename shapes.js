class Shape {
    constructor(color) {
        this.color = color;
    }
    render() {

    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<polygon points="150,50 100,150 300,150" fill="${this.color}"/>`;
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<circle cx="150" cy="100" r="50" fill="${this.color}"/>`;
    }
}

class Square extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<rect x="75" y="50" width="150" height="100" fill="${this.color}"/>`;
    }
}

module.exports = {Shape, Triangle, Circle, Square};