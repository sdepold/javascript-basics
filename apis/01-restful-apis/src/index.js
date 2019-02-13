const app = require('./app')();
const port = process.env.PORT || 3000;

global.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`MVC app listening on port ${port}!`);
  });
});
