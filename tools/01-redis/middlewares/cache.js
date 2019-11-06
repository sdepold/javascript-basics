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
    const redisClient = getClient(); // might be undefined if no connection to Redis could have been established

    // if (redisClient) {
    //   res.sendResponse = res.send;
    //   res.send = async body => {
    //     // You can do things before answering the request here
    //     res.sendResponse(body);
    //   };
    // }

    next();
  };
