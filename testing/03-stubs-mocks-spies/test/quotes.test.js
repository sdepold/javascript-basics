const { expect } = require('chai');
const quotesLib = require("../src/quotes");
const sinon = require("sinon");

describe("quotes", () => {
  let quotes;

  beforeEach(function() {
    quotes = quotesLib();
  });

  context("real network requests", () => {
    it("returns a string", () => {
      return quotes.steve().then(quote => expect(quote).to.be.a("string"));
    });
  });

  context("manual stubbing", () => {
    let originalFromPerson;

    beforeEach(() => {
      originalFromPerson = quotes.fromPerson;
    });

    afterEach(() => {
      // Since we create a new quotes object on every test, we could also just skip this step entirely.
      // There can be scenarios in which the manipulated object is re-used in subsequent tests.
      quotes.fromPerson = originalFromPerson;
    });

    it("returns a quote", () => {
      quotes.fromPerson = () => Promise.resolve("some quote");

      return quotes.steve().then(quote => {
        expect(quote).to.equal("some quote");
      });
    });
  });

  context("stubs", () => {
    beforeEach(() => {
      sinon.stub(quotes, "fromPerson").returns(Promise.resolve("some quote"));
    });

    afterEach(() => {
              // Since we create a new quotes object on every test, we could also just skip this step entirely.
      // There can be scenarios in which the manipulated object is re-used in subsequent tests.

      quotes.fromPerson.restore();
    });

    it("returns a quote", () => {
      return quotes.steve().then(quote => {
        expect(quote).to.equal("some quote");
      });
    });
  });

  context("mocks", () => {
    it("expects a steve jobs query and returns a quote", () => {
      const mock = sinon.mock(quotes);

      mock
        .expects("fromPerson")
        .withArgs("steve jobs")
        .once()
        .returns(Promise.resolve("some quote"));

      return quotes.steve().then(() => {
        mock.verify();
      });
    });
  });

  context("spies", () => {
    let wikiQuotes;

    beforeEach(() => {
      wikiQuotes = {
        search: () => Promise.resolve([])
      };
      sinon.spy(wikiQuotes, "search");
      quotes = quotesLib(wikiQuotes);
    });

    it("should retry 5 times and then fail", () =>
      quotes.randomQuote().then(expect.fail).catch(err => {
        expect(err.message).to.equal("Couldn't find a random quote...");
        expect(wikiQuotes.search.callCount).to.equal(5);
      }));
  });
});
