import React from 'react';

class App extends React.Component {
  render(){
    return(
      <Parent>
        <div className="childA"></div>
        <div className="childA"></div>
      </Parent>
    )
  }
  
}

class Parent extends React.Component {
  render(){
    const children = React.Children.toArray(this.props.children);
    const items = children ? children.map(child => child) : [];
    console.log(items);
    return null;
  }
}

export default App;