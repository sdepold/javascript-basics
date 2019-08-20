'use strict';

module.exports = (req) => ({
    Task: require('./task')(req)
});
