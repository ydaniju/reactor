/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();*/

import { createStore } from "redux";

const counter = (state = 0, action) => {
  if (typeof state === "undefined") { return 0 };

  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counter);

const render = () => {
  document.body.innerText = store.getState();
}

store.subscribe(render);

render();

document.addEventListener("mouseover", () => {
  store.dispatch({type: "INCREMENT"});
});
