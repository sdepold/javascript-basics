const Sequelize = require("sequelize");

module.exports = function sequelizeMiddleware () {
    const sequelize = new Sequelize(null, null, null, {
        dialect: "sqlite",
        storage: "database.sqlite"
    });
    return async function (req, res, next) {
        req.sequelize = sequelize;
        require('../models')(req);
        await req.sequelize.sync();
        next();
    };
};
