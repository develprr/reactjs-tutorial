import React, { Component } from 'react'

import { CarFilterList } from './CarFilterList.js'
import { CarModelService } from '../service/CarModelService.js'

export class CarDetail extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let carModelId = this.props.selectedCarModel
		let carInfo = CarModelService.findById(carModelId)
		return (
			<ul className="list-group">
			  <li className="list-group-item"><h3>{carInfo.name}</h3></li>
			  <li className="list-group-item">Top Speed: {carInfo.speed}</li>
			  <li className="list-group-item">Color: {carInfo.color}</li>
			  <li className="list-group-item">Price: €{carInfo.price}</li>
			</ul>
		)
	}
}
