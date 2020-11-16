const Image = require('./image');
const User = require('./user');

User.hasMany(Image);
Image.belongsTo(User);

module.exports = {
    Image, User
};