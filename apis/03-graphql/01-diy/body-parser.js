module.exports = function bodyParser(fun) {
  return (req, res) => {
    const isJsonRequest = req.headers.contentType === "application/json";
    const hasBody = ["POST", "PUT", "PATCH"].includes(req.method);

    if (hasBody) {
      let rawBody = "";

      req.on("data", (chunk) => (rawBody += chunk.toString()));
      req.on("end", () => {
        req.body = isJsonRequest ? JSON.parse(rawBody) : rawBody;
        fun(req, res);
      });
    } else {
      fun(req, res);
    }
  };
};
