const Shape = (module.exports.Shape = class Shape {
  describe() {
    return `Area: ${this.area}, Perimeter: ${this.perimeter}`;
  }
});

module.exports.Rectangle = class Rectangle extends Shape {
  constructor(width, length) {
    super();
    this.width = width;
    this.length = length;
  }

  get area() {
    return this.width * this.length;
  }

  get perimeter() {
    return 2 * (this.width + this.length);
  }
};

module.exports.Circle = class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  get perimeter() {
    return 2 * Math.PI * this.radius;
  }
};

module.exports.Triangle = class Triangle extends Shape {
  constructor(a, b, c) {
    super();
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get area() {
    const s = 0.5 * this.perimeter;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }
};
