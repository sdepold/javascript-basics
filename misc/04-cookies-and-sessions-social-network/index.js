const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const Sequelize = require("sequelize");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const SessionStore = require('express-session-sequelize')(expressSession.Store);

const app = express();

global.sequelize = new Sequelize(null, null, null, {
  dialect: "sqlite",
  storage: "database.sqlite",
});

const sequelizeSessionStore = new SessionStore({
  db: global.sequelize,
});

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({ createParentPath: true }));
app.use(cors());
app.use(cookieParser());
app.use(expressSession({
  secret: 'keep it secret, keep it safe.',
  store: sequelizeSessionStore,
  resave: false,
  saveUninitialized: false,
}));

// Routes are registered here
app.use("/", require("./routes/home"));
app.use("/users", require("./routes/users"));
app.use("/sessions", require("./routes/sessions"));
app.use("/images", require("./routes/images"));
app.use("/hello", require("./routes/hello"));

(async () => {
  // Synchronize our models with the database
  await global.sequelize.sync();

  // Start the server on port 3000
  app.listen(3000, () => {
    console.log(`Social network app is now listening on http://localhost:3000`);
  });
})();
