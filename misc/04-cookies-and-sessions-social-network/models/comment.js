const Sequelize = require('sequelize');

module.exports = global.sequelize.define('comment', {
    text: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});