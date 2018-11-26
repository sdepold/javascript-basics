const sinon = require("sinon");
const app = require("../src/index");
const { expect } = require("chai");
const runApp = app.run;

describe("index", () => {
  let clock, getQuote;

  beforeEach(() => {
    clock = sinon.useFakeTimers();
    getQuote = sinon.stub().returns(Promise.resolve("my quote"));
  });

  afterEach(() => {
    clock.restore();
  });

  it("should render a quote every 5 seconds", done => {
    runApp(getQuote, 5).then(() => {
      expect(getQuote.callCount).to.equal(5);
      done();
    });
    clock.tick(30000);
  });
});
