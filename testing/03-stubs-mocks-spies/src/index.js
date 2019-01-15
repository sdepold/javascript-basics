const { randomQuote } = require("./quotes")();
const printQuote = getQuote => {
  getQuote().then(quote => {
    if (quote) {
      console.log(new Date());
      console.log(quote);
      console.log();
    }
  });
};

const run = (getQuote, limit = 0) =>
  new Promise(resolve => {
    const intervalId = setInterval(() => {
      printQuote(getQuote);

      if (--limit === 0) {
        clearInterval(intervalId);
        return resolve();
      }
    }, 5000);
  });

if (require.main === module) {
  run(randomQuote);
} else {
  module.exports = {
    run
  };
}
