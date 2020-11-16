const Sequelize = require('sequelize');

module.exports = global.sequelize.define('Image', {
    filename: {
        type: Sequelize.STRING,
        allowNull: false
    }
});