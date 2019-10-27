const { expect } = require("chai");
const { Shape, Triangle } = require("./");

describe("shapes", () => {
  let shape;

  describe("triangle", () => {
    beforeEach(() => {
      shape = new Triangle(3, 4, 5);
    });

    it("is a shape", () => {
      expect(shape).to.be.instanceof(Shape);
    });

    it('calculates the area correctly', ()=>{
        expect(shape.area).to.equal(6);
    });

    it('calculates the perimeter correctly', ()=> {
        expect(shape.perimeter).to.equal(12);
    });
  });
});
