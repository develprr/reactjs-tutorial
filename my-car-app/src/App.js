import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import logo from './logo0000.png'
import './App.css'

import { AppTitle } from './component/AppTitle.js'
import { CarFilterList } from './component/CarFilterList.js'
import { Management } from './component/Management.js'
import { Navigation } from './component/Navigation.js'
import { Login } from './component/Login.js'

class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {loggedIn: true}
		this.handleLoginSuccess = this.handleLoginSuccess.bind(this)
		this.handleExitRequest = this.handleExitRequest.bind(this)
	}

	handleLoginSuccess(event) {
		this.setState({ loggedIn: true })
	}

	handleExitRequest() {
		this.setState({ loggedIn: false })
	}

	createViewComponent() {
		if (this.state.loggedIn) {
			return React.createElement(Management, { fireExitRequest: this.handleExitRequest })
		} else {
			return React.createElement(Login, { fireLoginSuccess: this.handleLoginSuccess })
		}
	}

	render() {
	 	let viewComponent = this.createViewComponent();
		return (
			<div className="container-fluid">
				<AppTitle name="Cars"/>
				{viewComponent}
			</div>
		)
  	}
}


ReactDOM.render(
        <App/>,
        document.getElementById('root')
)



export default App;
