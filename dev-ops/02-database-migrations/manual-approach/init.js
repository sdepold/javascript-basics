#!/usr/bin/env node

const faker = require("faker");
const { query } = require("./db-helper");

(async () => {
  console.log("Initializing the database");

  await query(
    "CREATE TABLE users(ID INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255), avatar VARCHAR(255))"
  );

  for (let i = 0; i < 50; i++) {
    const name = faker.name.findName();
    const avatar = faker.image.avatar();
    const sql = `INSERT INTO users (name, avatar) VALUES (?, ?)`;

    await query(sql, [name, avatar]);
  }
})();
