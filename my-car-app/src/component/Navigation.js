import React, { Component } from 'react'
import $ from 'jquery'

export class Navigation extends React.Component {

	constructor(props) {
		super(props);
		this.onBackButtonClicked = this.onBackButtonClicked.bind(this);
		this.onExitButtonClicked = this.onExitButtonClicked.bind(this);
	}
	onBackButtonClicked() {
		this.props.fireBackwardRequest();
	}

	onExitButtonClicked() {
		this.props.fireExitRequest();
	}

	componentDidMount() {
		$("#back-button").click(this.onBackButtonClicked);
		$("#exit-button").click(this.onExitButtonClicked);
	}

	render() {
		return (
			<div id="navigation-div" className="row">
				<div className="col-xs-12">
					<button id="back-button" type="button" className="btn btn-default btn-lg pull-left">
						<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> Back
					</button>
					<button id="exit-button" type="button" className="btn btn-default btn-lg pull-right">
						<span className="glyphicon glyphicon-log-out" aria-hidden="true"></span> Exit
					</button>
				</div>
			</div>
		)
	}

}
