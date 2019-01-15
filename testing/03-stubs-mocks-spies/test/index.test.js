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
    runApp(getQuote, 5).then(done);

    // Wait 1 second for the first quote to appear
    clock.tick(5000);
    expect(getQuote.callCount).to.equal(1);

    // Wait 2 seconds for another 2 quotes
    clock.tick(10000);
    expect(getQuote.callCount).to.equal(3);

    // Wait 2 seconds for another 2 quotes
    clock.tick(10000);
    expect(getQuote.callCount).to.equal(5);
  });
});
