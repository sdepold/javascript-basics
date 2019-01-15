module.exports = (fun, n) => {
  return [...Array(Number(n + 1)).keys()].map(fun);
};
