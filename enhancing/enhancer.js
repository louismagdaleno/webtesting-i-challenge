module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20){
    item.enhancement++;
  }
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
