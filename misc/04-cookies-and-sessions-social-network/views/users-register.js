const template = require("./template");

module.exports = ({ error } = {}) => {
  const errorContent = error ? `<p>${error}</p>` : "";

  return template(
    {},
    () => `
        <form action="/users/register" method="POST">
            <label>
                Username:
                <input type="text" name="username">
            </label>

            ${errorContent}

            <input type="submit" value="Register">
        </form>
    `
  );
};
