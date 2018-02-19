const expect = require("expect");
const deepFreeze = require("deep-freeze");

const addCounter = (list) => {
  return list.concat([0]);
};

const removeCounter = (list, index) => {
  return [...list.slice(0, index), ...list.slice(index + 1)];
}

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);
  

  expect(addCounter(listBefore, 0)).toEqual(listAfter);
}

const testRemoveCounter = () => {
  const listBefore = [0, 0, 0];
  const listAfter = [0, 0];

  deepFreeze(listBefore);
  expect(removeCounter(listBefore, 1)).toEqual(listAfter);
}

testAddCounter();
testRemoveCounter();
console.log("We passed");
