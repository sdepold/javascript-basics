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
  },

  async getCachedJoke(client) {
    if (!client) {
      return await Joke.getJoke();
    }

    const getCacheKey = function() {
      const datePrefix = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");

      return `jod-${datePrefix}-raw`;
    };

    const cacheKey = getCacheKey();
    const cacheResult = await client.get(cacheKey);

    if (cacheResult) {
      console.log({ cacheResult });
      return JSON.parse(cacheResult);
    }

    const result = await Joke.getJoke();
    console.log({ result });
    await client.set(cacheKey, JSON.stringify(result));

    return result;
  }
});
