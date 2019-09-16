const express = require("express");
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const morgan = require("morgan");
const Sequelize = require("sequelize");
const cors = require('cors');
const expressSession = require('express-session');
const requireAll = require("require-dir-all");

const app = express();
const port = process.env.PORT || 3000;
const SessionStore = require('express-session-sequelize')(expressSession.Store);

global.sequelize = new Sequelize(null, null, null, {
    dialect: "sqlite",
    storage: "database.sqlite"
});

const sequelizeSessionStore = new SessionStore({
    db: global.sequelize,
});

app.use(morgan("dev"));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(expressSession({
    secret: 'keep it secret, keep it safe.',
    store: sequelizeSessionStore,
    resave: false,
    saveUninitialized: false,
}));
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

Object.values(requireAll("./controllers")).forEach(c => app.use(c));

global.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Sessions demo app listening on port ${port}!`);
    });
});
