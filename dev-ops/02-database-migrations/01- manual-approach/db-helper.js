const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db.sqlite");

// db.on("trace", console.log);

module.exports = {
  query(sql, args) {
    return new Promise((resolve, reject) => {
      db.all(sql, args, (err, res) => err ? reject(err) : resolve(res));
    });
  },

  closeConnection() {
      db.close();
  }
};
