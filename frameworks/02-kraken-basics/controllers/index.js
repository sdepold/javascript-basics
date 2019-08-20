'use strict';

module.exports = function (router) {
    router.get('/', async (req, res) => {
        res.redirect("/tasks");
    });
};
