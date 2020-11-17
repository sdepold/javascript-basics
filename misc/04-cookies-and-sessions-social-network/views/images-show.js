const template = require("./template");

function getComments(comments) {
  return `
    <div class="comments">
      -
    </div>
  `;
}

module.exports = ({ image } = {}) => {
  return template(
    {},
    `
      <div class="image-show">
        <img src="/uploads/${image.filename}" />
        <div class="meta">👤 ${image.user.username}</div>
        ${getComments()}
      </div>
    `
  );
};
