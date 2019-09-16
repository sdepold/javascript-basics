const { Router } = require('express');
const controller = Router();

controller.post("/login", (req, res) => {
    req.session.email = req.body.email;
    res.redirect('/');
});

controller.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return console.log(err);
        }
        res.redirect('/');
    });

});

module.exports = controller;
