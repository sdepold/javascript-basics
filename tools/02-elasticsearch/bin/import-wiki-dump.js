#!/usr/bin/env node

const { readFileSync } = require("fs");
const xml2js = require("xml2js");
const { Client } = require("@elastic/elasticsearch");
const Bluebird = require("bluebird");

const xmlParser = new xml2js.Parser();
const client = new Client({ node: "http://localhost:9200" });

(async () => {
  const dataXml = readFileSync(process.argv[2], "utf-8");
  const data = await xmlParser.parseStringPromise(dataXml);
  const pages = data.mediawiki.page.map(p => ({
    title: p.title[0],
    text: p.revision[0] && p.revision[0].text[0] && p.revision[0].text[0]._.trim()
  }));

  console.log("Random page found:");
  console.log(pages[~~(pages.length * Math.random())]);

  delete dataXml;
  delete data;

  console.log('Importing into index:', process.argv[3] || "wiki-sample")

  await Bluebird.mapSeries(pages, page =>
    client.index({
      index: process.argv[3] || "wiki-sample",
      body: {
        title: page.title,
        text: page.text
      }
    })
  );
})();
