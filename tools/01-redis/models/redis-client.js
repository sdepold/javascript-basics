const redis = require("async-redis");
const client = redis.createClient({
  retry_strategy: () => {
    console.log("No redis server available.");
  }
});
let ready;

client.on("ready", () => {
  console.log("Redis cache is now available...");
  ready = true;
});

client.on("error", e => {
  console.log(e);
});

module.exports = {
  getClient() {
    return ready && client;
  }
};
