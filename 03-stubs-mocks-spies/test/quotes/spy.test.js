const { expect } = require("chai");
const quotesLib = require("../../src/quotes");
const sinon = require("sinon");

describe("quotes", () => {
  describe("randomQuote", () => {
    let wikiQuotes, quotes;

    beforeEach(() => {
      wikiQuotes = {
        search: () => Promise.resolve([])
      };
      sinon.spy(wikiQuotes, "search");
      quotes = quotesLib(wikiQuotes);
    });

    it.only("should retry 5 times and then fail", () =>
      quotes.randomQuote().then(expect.fail).catch(err => {
        expect(err.message).to.equal("Couldn't find a random quote...");
        expect(wikiQuotes.search.callCount).to.equal(5);
      })
    );
  });
});
