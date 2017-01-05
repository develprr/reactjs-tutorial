import React, { Component } from 'react';
import logo from './logo0000.png';
import './App.css';



class AppTitle extends React.Component {
    render(){
        return (
            <h3>This is a Bootstrap / ReactJS Demo App for {this.props.name}</h3>
        );
    }
}


class CarFilterList extends React.Component {
	
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {items: this.getAllItems(), initialItems: this.getAllItems()};
	}
	getAllItems() {
		return  [
				"Audi",
				"Porsche",
				"Tesla",
				"Bugatti",
				"Ferrari",
				"Lamborghini"
			];
	}

	handleChange(event) {
		var searchPhrase = event.target.value;
		var items = this.state.initialItems;
		var filteredItems = [];
		for (var i = 0; i < items.length; i++) {
			var item = items[i];
			if (item.toLowerCase().indexOf(searchPhrase.toLowerCase()) === -1) {
				continue;
			}
			filteredItems.push(item);
		}
		this.setState({items: filteredItems});
		
	}

	
	render() {
		return (
			<div className="form-group row">
				<p/>
				<div className="container-fluid">
					<input className="form-control" type="text" placeholder="Search" onChange={this.handleChange}/>
				</div>
				<p/>
				<BootstrapList items={this.state.items}/>
			</div>
			
		);
 	 }
}

class BootstrapList extends React.Component {
	render() {
		var itemMap = this.props.items.map((item) =>
			<li className="list-group-item" key={item.toString()}>
			      {item}
			</li>
  		);
		return(
			<div className="container-fluid">
				<ul className="list-group">{itemMap}</ul>
			</div>
		)
	}

}

class App extends React.Component {

	render() {
		return (
			<div className="container-fluid">
				<div className="App">
					
					<div className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
					  	<h2>Welcome to React</h2>
					</div>
					
					<AppTitle name="Cars"/>
					
					<CarFilterList/>
				</div>
			</div>
		);
  	}
}


 
export default App;
