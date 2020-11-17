const Comment = require('./comment');
const Image = require('./image');
const User = require('./user');

User.hasMany(Image);
Image.belongsTo(User);
Comment.belongsTo(Image);
Comment.belongsTo(User);
Image.hasMany(Comment);

module.exports = {
    Image, User, Comment
};