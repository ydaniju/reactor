import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class Wrapper extends React.Component {
  constructor() {
    super();
    this.state = { mount: false }
  }

  mount() {
    this.setState({ mount: true });
    ReactDOM.render(<App />, document.getElementById("a"));
  }

  unmount() {
    this.setState({ mount: false });
    ReactDOM.unmountComponentAtNode(document.getElementById("a"));
  }

  render() {
    let button = null;
    if (!this.state.mount) {
      button = <button onClick={this.mount.bind(this)}>Start</button>;
    } else {
      button = <button onClick={this.unmount.bind(this)}>Stop</button>;
    }
    return (
      <div>
        <h2>Fibonacci Counter</h2>

        {button}

        <div id="a"></div>
      </div>
    )
  }
}

export default Wrapper;