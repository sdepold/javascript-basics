const Graph = require("../graph");
const identity = {
  getSequence(n) {
    return [...Array(Number(n + 1)).keys()];
  }
};

describe("graph", () => {
  let graph;

  beforeEach(() => {
    graph = new Graph(identity);
  });

  test("render renders the expected html", () => {
    expect(graph.render(1, { id: 'test'}).trim()).toEqual(`
        <div id="test" style="width: 100%; height: 800px;"></div>

        <script>
            var chart = new CanvasJS.Chart("test", {
                data: [{
                    type: "line",
                    dataPoints: [{"y":0},{"y":1}]
                }]
            });
            chart.render();
        </script>
    `.trim());
  });

  test("getDataPoints returns an array of data points", () => {
    expect(graph._getDataPoints(5)).toEqual(
      JSON.stringify([
        { y: 0 },
        { y: 1 },
        { y: 2 },
        { y: 3 },
        { y: 4 },
        { y: 5 }
      ])
    );
  });
});
