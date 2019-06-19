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
  // If the item's enhancement is less than 15, the durability of the item is decreased by 5.
  if (item.enhancement < 15){
    item.durability -= 5;
  }
  // - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
  if (item.enhancement >= 15){
    item.durability -= 10;
  }
  // - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
  if (item.enhancement > 16){
    item.enhancement -= 1;
  }
  return { ...item };
}

function repair(item) {
  let newItem = { durability: 100};
  return newItem;
}

function get(item) {
  // mvp done
  return { ...item };
}
