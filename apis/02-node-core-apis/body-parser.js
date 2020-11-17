module.exports = function bodyParser(fun) {
  return (req, res) => {
    const isJsonRequest = req.headers.accept === "application/json";
    const hasBody = ["POST", "PUT", "PATCH"].includes(req.method);

    if (isJsonRequest && hasBody) {
      let rawBody = "";

      req.on("data", (chunk) => (rawBody += chunk.toString()));
      req.on("end", () => {
        req.body = JSON.parse(rawBody);
        fun(req, res);
      });
    } else {
      fun(req, res);
    }
  };
};
