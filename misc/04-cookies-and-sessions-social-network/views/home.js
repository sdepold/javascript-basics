const template = require("./template");

function getImage(image) {
  return `
    <div class="image">
      <img src="/uploads/${image.filename}" />
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
