const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const Sequelize = require("sequelize");
const cors = require("cors");

const app = express();

global.sequelize = new Sequelize(null, null, null, {
  dialect: "sqlite",
  storage: "database.sqlite",
});

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes are registered here
app.use("/", require("./routes/home"));
app.use("/users", require("./routes/users"));
app.use("/hello", require("./routes/hello"));

(async () => {
  // Synchronize our models with the database
  await global.sequelize.sync();

  // Start the server on port 3000
  app.listen(3000, () => {
    console.log(`Social network app is now listening on http://localhost:3000`);
  });
})();
