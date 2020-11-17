const template = require("./template");

module.exports = ({ error } = {}) => {
  const errorContent = error ? `<p>${error}</p>` : "";

  return template(
    {},
    `
      <div class="login">
        <h2>Login</h2>
      
        <form action="/sessions/login" method="POST">
            <label>
                Username:
                <input type="text" name="username">
            </label>

            ${errorContent}

            <input type="submit" value="Login">
        </form>
      </div>
    `
  );
};
