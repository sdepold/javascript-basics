#!/usr/bin/env node

const { query, closeConnection } = require("./db-helper");
const keyword = process.argv[2];

if (!keyword) {
  console.log("Please call this script with a search keyword: index.js John");
  process.exit(1);
}

(async () => {
  const results = await query("SELECT * FROM users where name LIKE ?", [
    `%${keyword}%`
  ]);

  //   const results = await query(
  //     "SELECT * FROM users where name LIKE ? OR eye_color=?",
  //     [`%${keyword}%`, keyword]
  //   );

  if (results && results.length > 0) {
    console.log(
      `\nSweet! We found you some ${results.length} matches! Go get them!\n`
    );
    results.map(res => console.log(`- ${res.name} (${res.avatar})`));
    // results.map(res => console.log(`- ${res.name} with shiny ${res.eye_color} eyes (${res.avatar})`));
  } else {
    console.log("Hmm, we did not find any match for you :( Don't give up!");
  }

  closeConnection();
})();
