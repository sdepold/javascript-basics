# Tools 01 | Redis

Redis is an in-memory data structure store, used as a database, cache and message broker.
Redis has built-in replication, Lua scripting, LRU eviction, transactions and different 
levels of on-disk persistence, and provides high availability via Redis Sentinel and 
automatic partitioning with Redis Cluster.

## Supported data structures

- Geometry (Lat-Lon based)
- Hashes
- Lists
- (Sorted) Sets
- Strings
- …

## Typical use cases

- Session cache
- Full Page Cache (like a CDN)
- Counting and leaderboards (e.g. tracking)
- Pub / Sub
- Rate limiting
- Or just for everything that is slow and needs to be cached

## Usage with Node

Some redis client libraries:

- Official and feature complete redis client https://www.npmjs.com/package/redis
- Async wrapper around the redis library: https://www.npmjs.com/package/async-redis


```js
const redis = require("async-redis");
const client = redis.createClient();

await client.get('some-key');
```

## Exercise

The application is reading the joke of the day through an API that is rate-limited (60 reqs / day, 10 / hour). Since the joke doesn't change the entire day, we can use Redis as a cache and respectively circumvent the rate limiting.

1. Run the app and open http://localhost:3000.
2. Two options for caching:
    1. Cache the entire HTML (You can find a template in middlewares/cache.js and a working solution in the middlewares/cache.solution.js)
    2. Cache only the retrieved joke (Check models/joke.caching.js for a working solution)
3. Implement page impression tracking that stores all impressions separated by day in Redis.
4. Can you think of a way to add the number of todays impressions into the cached HTML (See step 2.1.)? 
5. In case you create more than a single key in redis for a single day, let's convert it to hashes! See https://redis.io/commands#hash

## Pub Sub

- Run the app (yarn start)
- Run bin/www-pubsub in another terminal
- Execute `curl -H 'content-type: application/json' -d '{"message":"hello there"}' http://localhost:3000/message` 
    - This sends a POST request against /message with the body `{"message":"hello there"}`
- The endpoint will publish your message to redis and www-pubsub is listening von messages on a specific channel and prints the received messages to console

### Bonus exercise

- Extend the logic in www-pubsub to publish a response event with random a message that is observed in the message endpoint and returned to the requestor

