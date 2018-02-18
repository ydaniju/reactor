import React from 'react';

class App extends React.Component {
  render() {
    return (
      <Parent>
        <div className="childA">A</div>
        <div className="childA">B</div>
        <div className="childC">C</div>
      </Parent>
    )
  }
}

class Parent extends React.Component {
  render() {
    const children = React.Children.toArray(this.props.children);
    const items = children ? children.map(child => child) : [];
    return items;
  }
}

export default App;
