const Sequelize = require('sequelize');

module.exports = global.sequelize.define('image', {
    filename: {
        type: Sequelize.STRING,
        allowNull: false
    }
});