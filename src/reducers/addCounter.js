const expect = require("expect");
const deepFreeze = require("deep-freeze");

const addCounter = (list) => {
  return list.concat([0]);
};

const removeCounter = (list, index) => {
  return [...list.slice(0, index), ...list.slice(index + 1)];
}

const incrementCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ];
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

const testIncrementCounter = (list, index) => {
  const listBefore = [0, 0, 0];
  const listAfter = [0, 1, 0];

  deepFreeze(listBefore);
  expect(incrementCounter(listBefore, 1)).toEqual(listAfter);
}

testAddCounter();
testRemoveCounter();
testIncrementCounter();
console.log("We passed");
