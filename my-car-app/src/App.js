import React, { Component } from 'react';
import logo from './logo0000.png';
import './App.css';

import { AppTitle } from './component/AppTitle.js'
import { CarFilterList } from './component/CarFilterList.js'

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
