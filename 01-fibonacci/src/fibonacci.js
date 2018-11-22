let cache = [];

const fib = n => {
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
    return fib(n - 2) + fib(n - 1);
  }
};

module.exports = fib;
