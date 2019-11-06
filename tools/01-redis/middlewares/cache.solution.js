const { getClient } = require("../models/redis-client");

const getCacheKey = function() {
  const datePrefix = new Date()
    .toJSON()
    .slice(0, 10)
    .replace(/-/g, "/");

  return `jod-${datePrefix}`;
};

module.exports = () =>
  async function(req, res, next) {
    const redisClient = getClient();

    if (redisClient) {
      const cacheKey = getCacheKey();
      const cacheResult = await redisClient.get(cacheKey);

      if (cacheResult) {
        return res.send(cacheResult);
      }

      res.sendResponse = res.send;
      res.send = async body => {
        await redisClient.set(cacheKey, body);
        res.sendResponse(body);
      };
    }

    next();
  };
