import React, { Component } from 'react';
import logo from './logo0000.png';
import './App.css';


var DataService = {

	getCarList: function() {
		return [
			"Audi",
			"Mercedes-Benz",
			"Ford",
			"Toyota",
			"Tesla"

		];
	}
};

var AppTitle = React.createClass({
    render: function(){
        return (
            <h1>This is a react Demo App for {this.props.name}</h1>
        );
    }
});


var CarList = React.createClass({
  
  getInitialState: function(){
     return {
       initialItems: [
         "Audi",
         "Ferrari",
         "Porche",
         "Testla"
       ],
       items: []
     }
  },
  componentWillMount: function(){
    this.setState({items: this.state.initialItems})
  },
  render: function(){
    return (
      <div className="car-list">
      	<List items={this.state.items}/>
      </div>
    );
  }
});

var List = React.createClass({
  render: function(){
    return (
      <ul>
      {
        this.props.items.map(function(item) {
          return <li key={item}>{item}</li>
        })
       }
      </ul>
    )  
  }
});


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>A ReactJS Demo by Heikki / Oppikone </h2>
        </div>
        <p className="App-intro">
		<AppTitle name="Cars" />
        </p>
	<p className="App-carlist">
		<CarList/>
	</p>
      </div>
    );
  }
}

export default App;
