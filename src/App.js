import React from "react";
import ReactDOM from 'react-dom';
import { createStore } from "redux";

const counter = (state = 0, action) => {
  if (typeof state === "undefined") { return 0 };

  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      if (state > 0) {
        return state - 1
      } else {
        return state;
      }
    default:
      return state;
  }
};

const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

store.subscribe(render);

class App extends React.Component {
  render(){
    return(
      <Counter
        value={ store.getState() }
        onIncrement={ () => store.dispatch({ type: "INCREMENT" }) }
        onDecrement={ () => store.dispatch({ type: "DECREMENT" }) }
      />
    )
  }
}

const Counter = (props) => {
  return (
    <div>
      <h1>{props.value}</h1>
      <button onClick={props.onDecrement}>-</button>
      <button onClick={props.onIncrement}>+</button>
    </div>
  );
}
export default App;