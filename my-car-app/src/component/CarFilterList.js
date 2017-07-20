import React, { Component } from 'react'
import $ from 'jquery'

import { BootstrapList} from './BootstrapList.js'
import { CarModelService } from '../service/CarModelService.js'
import { dispatch } from  'synchronous-dispatcher'
export class CarFilterList extends React.Component {

	constructor(props) {
		super(props);
		this.handleSearchPhraseChange = this.handleSearchPhraseChange.bind(this);
		this.onCarModelSelected = this.onCarModelSelected.bind(this);
		let carModels = CarModelService.findAll();
		this.state = { carModels: carModels, initialCarModels: carModels };
	}


	componentDidMount() {
		this.configureListeners()
	}

	componentDidUpdate() {
		this.configureListeners()
	}

	onCarModelSelected(event) {
		event.stopPropagation()
		let target = event.target;
		let dataId = $(target).attr("data-id")
		dispatch('CAR-MODEL-SELECTED', dataId)
		return false
	}

  configureListeners() {
		$(".list-group-item").unbind("click")
		$(".list-group-item").click(this.onCarModelSelected);
	}

	handleSearchPhraseChange(event) {
		var searchPhrase = event.target.value;
		var filteredModels = CarModelService.filterByName(searchPhrase);
		this.setState({carModels: filteredModels});
	}

	render() {
		// <BootstrapList items={this.state.carModels}/>
		return (
			<div className="form-group row">
				<div className="container-fluid">
					<input className="form-control" type="text" placeholder="Search" onChange={this.handleSearchPhraseChange}/>
				</div>
				<p/>
				<BootstrapList items={this.state.carModels}/>
			</div>

		);
 	 }
}
