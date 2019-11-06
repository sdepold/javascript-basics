const fetch = require("node-fetch");
const jokesHost = "https://api.jokes.one";

const Joke = (module.exports = {
  async getJoke() {
    const response = await fetch(`${jokesHost}/jod`, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    const result = await response.json();

    return result.contents.jokes[0].joke;
  }
});
