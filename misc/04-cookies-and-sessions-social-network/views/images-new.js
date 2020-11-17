const template = require("./template");

module.exports = (params) => {
  return template(
    params,
    `
        <form action="/images/new" method="POST" enctype='multipart/form-data'>
            <label>
                Image:
                <input type="file" name="data" accept="image/*">
            </label>

            <input type="submit" value="Upload new image">
        </form>
    `
  );
};
