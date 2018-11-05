let cache = [];

const getSequence = n => {
  return [...Array(Number(n + 1)).keys()].map(get);
};

const get = n => {
  const result = cache[n] || calc(n);
  return (cache[n] = result);
};

const calc = n => {
  if (n < 0) {
    throw new Error("oob exception");
  } else if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    return get(n - 2) + get(n - 1);
  }
};

module.exports = {
  get,
  getSequence
};
