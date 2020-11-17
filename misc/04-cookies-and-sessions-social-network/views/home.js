const template = require("./template");

function getImage(image) {
  return `
    <div class="image">
      <a href="/images/${image.id}">
        <img src="/uploads/${image.filename}" />
      </a>
      <div class="meta">
        <div class="author">👤 ${image.user.username}</div>
        <div class="comments">💬 ${image.comments.length}</div>
      </div>
    </div>
  `;
}

function getImages(images) {
  return images.map(getImage).join("");
}

function getNewImage(user) {
  if (!user) {
    return "";
  }

  return `
    <div class="image new-image">
      <a href="/images/new">+</a>
    </div>
  `;
}

module.exports = ({ user, images = [] }) => {
  return template(
    { user },
    `
      <div class="images">
        ${getImages(images)}
        ${getNewImage(user)}
      </div>
    `
  );
};
