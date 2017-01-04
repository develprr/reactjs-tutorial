import React, { Component } from 'react';
import logo from './logo0000.png';
import './App.css';



var AppTitle = React.createClass({
    render: function(){
        return (
            <h1>This is a react Demo App for {this.props.name}</h1>
        );
    }
});


var List = React.createClass({
   render: function() {
	<ul>
	{
		this.props.items.map(function(item) {
			return <li key={item}>{item}</li>
		})
	}
	</ul>
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
         	There will be soon a demo app with Cars.
        </p>
      </div>
    );
  }
}

export default App;
