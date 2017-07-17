import React, { Component } from 'react'

export class Login extends React.Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		this.props.fireLoginSuccess(event);
		event.preventDefault();
		return false;
	}


	render() {
		return (
			<form>
				  <div className="form-group">
				    <label htmlFor="email">Email address:</label>
				    <input type="email" className="form-control" id="email"/>
				  </div>
				  <div className="form-group">
				    <label htmlFor="pwd">Password:</label>
				    <input type="password" className="form-control" id="pwd"/>
				  </div>
				  <div className="checkbox">
				    <label><input type="checkbox"/> Remember me</label>
				  </div>
				  <button type="submit" className="btn btn-default"  onClick={this.handleSubmit} >Submit</button>
			</form>
		);
  	}

}
