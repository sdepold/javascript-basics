const { expect } = require("chai");
const quotesLib = require("../../src/quotes");
const sinon = require("sinon");

describe("quotes", () => {
  describe("steve", () => {
    let mock, quotes;

    beforeEach(() => {
      quotes = quotesLib();
      mock = sinon.mock(quotes);
    });

    afterEach(() => {
      mock.restore();
    });

    it("should just call fromPerson with the query 'steve jobs'", () => {
      mock
        .expects("fromPerson")
        .once()
        .withArgs("steve jobs")
        .returns(Promise.resolve());
      return quotes.steve().then(() => mock.verify());
    });
  });
});
