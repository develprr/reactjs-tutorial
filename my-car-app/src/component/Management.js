import React, { Component } from 'react'
import { CarDetail } from './CarDetail.js'
import { CarFilterList } from './CarFilterList.js'
import { Navigation } from './Navigation.js'
import { CarModelService } from '../service/CarModelService.js'
import $ from 'jquery'

export class Management extends React.Component {

	constructor(props) {
		super(props);
		this.state = { loggedIn: true }
		this.handleCarModelSelected = this.handleCarModelSelected.bind(this)
		this.handleLoginSuccess = this.handleLoginSuccess.bind(this)
		this.handleBackwardRequest = this.handleBackwardRequest.bind(this)
		this.handleExitRequest = this.handleExitRequest.bind(this)
	}

	handleLoginSuccess(event) {
		this.setState({ loggedIn: true })
		$("#navigation-div").show()
	}

	handleCarModelSelected(carModelId) {
		this.setState({ selectedCarModel: carModelId });
	}
	unSelectCarModel() {
		var selectedCarModel = this.selectedCarModel;
		this.setState({
			selectedCarModel: null,
			unSelectedCarModel: selectedCarModel
		});
	}

	reSelectCarModel() {
		var unSelectedCarModel = this.state.unSelectedCarModel;
		if (unSelectedCarModel) {
			this.setState({
				selectedCarModel: unSelectedCarModel
			});
		}
	}

	handleBackwardRequest() {
		if (this.state.selectedCarModel) {
			this.unSelectCarModel();
		} else {
			this.reSelectCarModel();
		}
	}

	handleExitRequest() {
		this.props.fireExitRequest();
	}

	createViewComponent() {
		if (this.state.selectedCarModel) {
			return React.createElement(CarDetail, {
				fireCloseRequested: this.handleCarModelUnselected,
				selectedCarModel: this.state.selectedCarModel
			});
		}
		return React.createElement(CarFilterList, {fireCarModelSelected: this.handleCarModelSelected } );

	}
	render() {
		var viewComponent = this.createViewComponent();
		return (
			<div className="App">
				<Navigation
					fireBackwardRequest={this.handleBackwardRequest }
					fireExitRequest={this.handleExitRequest }
				/>
			 	{ viewComponent }
			</div>

		);
  	}
}
