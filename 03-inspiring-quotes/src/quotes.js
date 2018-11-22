const wikiQuote = require("wikiquote");
const faker = require("faker");

module.exports = (source = wikiQuote) => {
  const exports = {
    randomQuote(tries = 5) {
      if (tries === 0) {
        return Promise.reject(new Error("Couldn't find a random quote..."));
      }

      return searchRandom().then(
        title =>
          (title
            ? source.getRandomQuote(title)
            : this.randomQuote(tries - 1))
      );
    },

    fromPerson(name) {
      return source
        .searchPeople(name)
        .then(getFirstTitle)
        .then(person => source.getRandomQuote(person));
    },

    steve() {
      return this.fromPerson("steve jobs");
    }
  };

  function getFirstTitle(arr) {
    return arr.length > 0 ? arr[0].title : undefined;
  }

  function searchRandom() {
    return source.search(faker.name.firstName()).then(getFirstTitle);
  }

  return exports;
};
