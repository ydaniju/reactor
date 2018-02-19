const expect = require('expect');
const Redux = require('redux');

const counter = (state = 0, action) => {
  if (typeof state === "undefined") { return state };

  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const { createStore } = Redux;
const store = createStore(counter);
console.log("initial state", store.getState());
store.dispatch({type: "INCREMENT"});
console.log("after an increment", store.getState());

store.subscribe(() => {
  document.body.innerText = store.getState();
})