function getHeader(user) {
  const userContent = user
    ? `${user.username} | <a href="/sessions/logout">Logout</a>`
    : `<a href="/sessions/login">Login</a> | <a href="/users/register">Register</a>`;

  return `
        <header>
            <h1 class="app-name"><a href="/">Social Network App 🙋‍♀️</a></h1>
            <div class="user">${userContent}</div>
        </header>
    `;
}

module.exports = ({ user } = {}, yield='') => `
    <html>
        <head>
            <title>Social Network App</title>
            <link href="/styles.css" rel="stylesheet" type="text/css" media="all">
        </head>
        <body>
            ${getHeader(user)}
            ${yield}
        </body>
    </html>
`;
