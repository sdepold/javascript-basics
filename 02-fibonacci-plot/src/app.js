const express = require("express");
const app = express();
const Graph = require("./graph");

const fib = require("../../01-fibonacci/src/fibonacci");
const altMath = {
  getSequence(n) {
    return [...Array(Number(n)).keys()].map(x => {
      return x === 0 ? undefined : 1.0 / x;
    });
  }
};

const graph = new Graph(fib);

app.get("/", function(req, res) {
  const amount = Number(req.query.amount || 5);

  res.send(
    `
    <html>
        <head>
            <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
        </head>
        <body>
            <h1>Fibonacci Plot</h1>

            <form action="/">
                # of data points:
                <input type="number" name="amount" value="${amount}" />
                <input type="submit" />
            </form>

            ${graph.render(amount)}
        </body>
    </html>
  `
  );
});

module.exports = app;
