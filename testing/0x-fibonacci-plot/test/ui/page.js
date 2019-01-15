var webdriverio = require("webdriverio");
var options = {
  desiredCapabilities: {
    browserName: "firefox"
  }
};
const expect = require("chai").expect;

describe("UI", () => {
  let browser;

  beforeEach(() => {
    browser = webdriverio.remote(options).init().url("http://localhost:3000/");
  });

  afterEach(() => {
    browser.close();
  });

  it("has a page title", () =>
    browser
      .getTitle()
      .then(title => {
        expect(title).to.equal("Fibonacci Plot");
      })
      .end());

  it("defaults to 5 | fib", () =>
    browser
      .getValue("[name=amount]")
      .then(defaultAmount => {
        expect(defaultAmount).to.equal("5");
      })
      .then(() => browser.getValue("[name=method]"))
      .then(method => {
        expect(method).to.equal("fib");
      })
      .end());

  it("is possible to render a different graph", () =>
    browser.getAttribute('[id*="graph-"]', "id").then(originalGraphId => {

      return browser
        .selectByValue("[name=method]", "identity")
        .then(() => browser.click("#sequenceForm [type=submit]"))
        .getAttribute('[id*="graph-"]', "id")
        .then(newGraphId => {
          expect(originalGraphId).to.not.equal(newGraphId);
        });
    }));
});
