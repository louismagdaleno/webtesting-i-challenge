module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  let newItem = { durability: 100};
  return newItem;
}

function get(item) {
  return { ...item };
}
