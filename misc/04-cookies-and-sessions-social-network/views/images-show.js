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

function getCreateCommentForm(image) {
  return `
    <div class="create-comment">
      <form method="POST" action="/images/${image.id}/comments">
        <label>
          Your comment:

          <textarea name="comment" id="comment-content" data-image-id="${image.id}"></textarea>
        </label>

        <input type="submit" value="Save your comment">
      </form>
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
        ${getCreateCommentForm(image)}
      </div>
      <script src="/sync-comment.js"></script>
    `
  );
};
