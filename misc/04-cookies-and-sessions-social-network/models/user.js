const Sequelize = require('sequelize');

module.exports = global.sequelize.define('User', {
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    }
});