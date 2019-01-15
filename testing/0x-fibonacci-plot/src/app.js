const express = require("express");
const app = express();
const Graph = require("./graph");

const fib = require("../../01-test-driven-development/src/fibonacci");
const identity = x => x;
const sequence = require("../../02-dependency-injection/index");

app.get("/", function(req, res) {
  const amount = Number(req.query.amount || 5);
  const selectedMethod = req.query.method || "fib";
  const method = { fib, identity }[selectedMethod];
  const math = {
    getSequence: sequence.bind(null, method)
  };
  const graph = new Graph(math);

  res.send(
    `
    <html>
        <head>
            <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
            <title>Fibonacci Plot</title>
        </head>
        <body>
            <h1>Fibonacci Plot</h1>

            <form action="/" id="sequenceForm">
                # of data points:
                <input type="number" name="amount" value="${amount}" />

                Sequencing method:
                <select name="method">
                  <option value="fib" ${selectedMethod === "fib" ? "selected" : ""}>Fibonacci</option>
                  <option value="identity" ${selectedMethod === "identity" ? "selected" : ""}>Identiy</option>
                </select>

                <input type="submit" />
            </form>

            ${graph.render(amount)}
        </body>
    </html>
  `
  );
});

module.exports = app;
