const { expect } = require("chai");
const quotesLib = require("../../src/quotes");
const wikiQuotes = require("wikiquote");
const sinon = require("sinon");

describe("quotes", () => {
  describe("with real api requests", () => {
    const quotes = quotesLib();

    it("should return a quote", () =>
      quotes.steve().then(q => expect(q).to.be.a("String")));

    it("should return a quote from a specific person", () =>
      quotes.fromPerson("steve jobs").then(q => expect(q).to.be.a("String")));
  });

  describe("with providing a different input", () => {
    const quotes = quotesLib({
      searchPeople: () => Promise.resolve([{ title: "foo" }]),
      getRandomQuote: () => Promise.resolve("quote")
    });

    it("should return the hard-coded content", () =>
      quotes.steve().then(q => expect(q).to.equal("quote")));

    it("should return a quote from a specific person", () =>
      quotes.fromPerson().then(q => expect(q).to.equal("quote")));
  });

  describe("with stubbing", () => {
    let quotes;

    beforeEach(() => {
      sinon
        .stub(wikiQuotes, "searchPeople")
        .returns(Promise.resolve([{ title: "foo" }]));
      sinon
        .stub(wikiQuotes, "getRandomQuote")
        .returns(Promise.resolve("quote"));

      quotes = quotesLib(wikiQuotes);
    });

    afterEach(() => {
      wikiQuotes.searchPeople.restore();
      wikiQuotes.getRandomQuote.restore();
    });

    it("should return the stubbed quote", () =>
      quotes.steve().then(q => expect(q).to.equal("quote")));

    it("should return a quote from a specific person", () =>
      quotes.fromPerson().then(q => expect(q).to.equal("quote")));
  });
});
