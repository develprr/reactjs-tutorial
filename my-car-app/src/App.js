import React, { Component } from 'react';
import logo from './logo0000.png';
import './App.css';



class AppTitle extends React.Component {
    render(){
        return (
            <h1>This is a react Demo App for {this.props.name}</h1>
        );
    }
}

class CarList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h3>Car List for {this.props.name}</h3>
        <ul>
          <li>Audi</li>
          <li>Porsche</li>
          <li>Tesla</li>
        </ul>
      </div>
    );
  }
}


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
	<AppTitle name="Cars"></AppTitle>
	<CarList name="Oppikone Demo"></CarList>
     
      </div>
    );
  }
}

export default App;
