import React, { Component } from 'react'
import { CarDetail } from './CarDetail.js'
import { CarFilterList } from './CarFilterList.js'
import { Navigation } from './Navigation.js'
import { CarModelService } from '../service/CarModelService.js'
import { dispatch, handle, unhandle } from 'synchronous-dispatcher'

export class Management extends React.Component {

	constructor(props) {
		super(props);
		this.state = { loggedIn: true }
		this.handleCarModelSelected = this.handleCarModelSelected.bind(this)
		this.handleLoginSuccess = this.handleLoginSuccess.bind(this)
		this.handleBackwardRequest = this.handleBackwardRequest.bind(this)
		this.handleExitRequest = this.handleExitRequest.bind(this)
	}

	componentDidMount() {
		handle('CAR-MODEL-SELECTED', this.handleCarModelSelected)
		handle('BACK-BUTTON-CLICKED', this.handleBackwardRequest)
	}

	componentWillUnmount() {
		unhandle('CAR-MODEL-SELECTED')
		unhandle('BACK-BUTTON-CLICKED')
	}

	handleLoginSuccess(event) {
		this.setState({ loggedIn: true })
	}

	handleCarModelSelected(carModelId) {
		this.setState({ selectedCarModel: carModelId });
	}
	deselectCarModel() {
		var selectedCarModel = this.selectedCarModel;
		this.setState({
			selectedCarModel: null,
			deselectedCarModel: selectedCarModel
		});
	}

	reselectCarModel() {
		var deselectedCarModel = this.state.deselectedCarModel;
		if (deselectedCarModel) {
			this.setState({
				selectedCarModel: deselectedCarModel
			})
		}
	}

	handleBackwardRequest() {
		if (this.state.selectedCarModel) {
			this.deselectCarModel()
		} else {
			this.reselectCarModel()
		}
	}

	handleExitRequest() {
		this.props.fireExitRequest()
	}

	createViewComponent() {
		if (this.state.selectedCarModel) {
			return React.createElement(CarDetail, {
				selectedCarModel: this.state.selectedCarModel
			});
		}
		return React.createElement(CarFilterList)
	}

	render() {
		var viewComponent = this.createViewComponent();
		let backButtonEnabled = this.state.selectedCarModel ? true : false
		return (
			<div className="App">
				<Navigation backButtonEnabled={backButtonEnabled} />
			 	{ viewComponent }
			</div>

		);
  	}
}
