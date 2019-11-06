const { getClient } = require("../models/redis-client");

const getCacheKey = function() {
  const datePrefix = new Date()
    .toJSON()
    .slice(0, 10)
    .replace(/-/g, "/");

  return `jod-${datePrefix}-tracking`;
};

module.exports = () =>
  async function(req, res, next) {
    const redisClient = getClient();

    if (redisClient) {
      const cacheKey = getCacheKey();
      const cacheResult = await redisClient.incr(cacheKey);

      console.log({ cacheResult });

      res.sendResponse = res.send;
      res.send = async body => {
        const enrichedBody = body.replace(
          '<div class="tracking"></div>',
          `<div class="tracking">${cacheResult}</div>`
        );
        res.sendResponse(enrichedBody);
      };
    }

    next();
  };
