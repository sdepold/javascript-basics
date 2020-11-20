const template = require("./template");

function getComment(comment) {
  return `
    <div class="comment">
      <div class="author">${comment.user.username}</div>
      <div class="content">${comment.text}</div>
    </div>
  `;
}

function getComments(comments) {
  return `
    <div class="comments">
      ${comments.map(getComment).join('')}
    </div>
  `;
}

module.exports = ({ image, user } = {}) => {
  return template(
    { user },
    `
      <div class="image-show">
        <img src="/uploads/${image.filename}" />
        <div class="meta">
          <div>👤 ${image.user.username}</div>
          <div>💬 ${image.comments.length}</div>
        </div>
        ${getComments(image.comments)}
      </div>
      <script src="/sync-comment.js"></script>
    `
  );
};
