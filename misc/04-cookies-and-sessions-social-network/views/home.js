const template = require("./template");

module.exports = ({ user, images=[] }) => {
  const imagesContent = images.map((image) => `
    <div class="image">
      <img src="/uploads/${image.filename}" />
    </div>
  `).join('');

  const newImageContent = user ? '<a href="/images/new">Upload new image</a>' : '';

  return template({ user }, () => `
    <div class="images">
      ${imagesContent}
      ${newImageContent}
    </div>
  `);
};
