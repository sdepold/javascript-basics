const template = require("./template");

function getImage(user, image) {
  return `
    <div class="image">
      <a href="/images/${image.id}">
        <img src="/uploads/${image.filename}" />
      </a>
      <div class="meta">
        <div class="author">👤 ${user.username}</div>
        <div class="comments">💬 0</div>
      </div>
    </div>
  `;
}

function getImages(user, images) {
  return images.map((image) => getImage(user, image)).join("");
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
        ${getImages(user, images)}
        ${getNewImage(user)}
      </div>
    `
  );
};
