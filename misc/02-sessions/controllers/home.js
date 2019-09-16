const { Router } = require('express');
const controller = Router();

controller.get("/", (req, res) => {
    const loggedInContent = `
        Hey! You are logged in with ${req.session.email}!

        <br><br>

        <form action="/logout" method="POST">
            <input type="submit" value="Log out!" />
        </form>
    `;
    const guestContent = `
        Welcome! Please login to continue!
                
        <br><br>
    
        <form action="/login" method="POST">
            eMail: <input type="text" name="email" />
            <input type="submit" />
        </form>
    `;

  res.send(`
    <html>
        <head>
            <title>Session test</title>
        </head>
        <body>
            ${req.session.email ? loggedInContent : guestContent}            
        </body>
    </html>
  `);
})

module.exports = controller;
