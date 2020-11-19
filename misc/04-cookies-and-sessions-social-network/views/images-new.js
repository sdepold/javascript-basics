const template = require("./template");

module.exports = (params) => {
  return template(
    params,
    `
      <div class="images-new">
        <h2>Upload a new image</h2>
        
        <form action="/images/new" method="POST" enctype='multipart/form-data'>
            <label>
                Image:
                <input type="file" name="data" accept="image/*">
            </label>

            <input type="submit" value="Upload new image">
        </form>
      </div>
    `
  );
};
