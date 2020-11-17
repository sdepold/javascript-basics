const template = require("./template");

module.exports = ({ error } = {}) => {
  const errorContent = error ? `<p>${error}</p>` : "";

  return template(
    {},
    `
      <div class="register">
        <h2>Register</h2>
        <form action="/users/register" method="POST">
          <label>
              Username:
              <input type="text" name="username">
          </label>

          ${errorContent}

          <input type="submit" value="Register">
        </form>
      </div>
    `
  );
};
