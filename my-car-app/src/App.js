import React, { Component } from 'react';
import logo from './logo0000.png';
import './App.css';



class AppTitle extends React.Component {
    render(){
        return (
            <h1>This is a Bootstrap/ReactJS Demo App for {this.props.name}</h1>
        );
    }
}

class CarList extends React.Component {
  render() {
    return (
      <div className="car-list">
        <h3>Car List for {this.props.name}</h3>
        <ul class="list-group">
          <li >Audi</li>
          <li>Porsche</li>
          <li>Tesla</li>
        </ul>
      </div>
    );
  }
}

class ParameterCarList extends React.Component {
	render() {
		var carMap = this.props.cars.map((car) =>
			<li className="list-group-item" key={car.toString()}>
			      {car}
			</li>
  		);
		return(
			<div className="container-fluid">
				<ul className="list-group">{carMap}</ul>
			</div>
		)
	}

}

class App extends React.Component {

	getCarList() {
		return [
			"Audi",
			"Porsche",
			"Tesla"
		];
	}

	render() {
		return (
			<div className="App">
				
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				  	<h2>Welcome to React</h2>
				</div>
				
				<AppTitle name="Cars"></AppTitle>
				
				
				<ParameterCarList cars={this.getCarList()} />
			</div>
		);
  	}
}


 
export default App;
