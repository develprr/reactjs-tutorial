import React, { Component } from 'react'

import { BootstrapList } from './BootstrapList.js'

export class CarFilterList extends React.Component {

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
