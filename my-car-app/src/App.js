import React from 'react'
import ReactDOM from 'react-dom'

import logo from './logo0000.png'
import './App.css'

import { AppTitle } from './component/AppTitle.js'
import { CarFilterList } from './component/CarFilterList.js'
import { Management } from './component/Management.js'
import { Navigation } from './component/Navigation.js'
import { Login } from './component/Login.js'

import handle from 'synchronous-dispatcher'
import dispatch from 'synchronous-dispatcher'
import MultilayerPerceptron from 'multilayer-perceptron'
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

	componentDidMount() {
	/*	handle('HEY-HO-SNOW', function() {
			alert('handle snow')
		})
		dispatch('HEY-HO-SNOW')*/
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
