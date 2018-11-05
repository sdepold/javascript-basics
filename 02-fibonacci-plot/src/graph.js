/*
  Instead of hard-wiring this module to the fibonacci sequence, we pass the previously created math
  library as a parameter to the constructor and ask the library for the sequence.

  This way, the graph module can be used with every sequence generator (e.g. identity).

  This approach is called dependency injection – namely constructor injection.
*/

module.exports = class Graph {
  constructor(math) {
    this.math = math;
  }

  render(n, { id = generateId() } = {}) {
    return `
        <div id="${id}" style="width: 100%; height: 800px;"></div>

        <script>
            var chart = new CanvasJS.Chart("${id}", {
                data: [{
                    type: "line",
                    dataPoints: ${this._getDataPoints(n)}
                }]
            });
            chart.render();
        </script>
    `;
  }

  _getDataPoints(n) {
    const sequence = this.math.getSequence(n);

    return JSON.stringify(sequence.map(y => ({ y })));
  }
};

function generateId() {
  return `graph-${~~(Math.random() * 1000)}`;
}
