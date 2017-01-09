
class AppTitle extends React.Component {
    render(){
        return (
            <h3>This is a Bootstrap / ReactJS Demo App </h3>
        );
    }
}


class CarFilterList extends React.Component {
	
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {items: this.getAllItems(), initialItems: this.getAllItems()};
	}
	getAllItems() {
		return  [
				"Audi",
				"Porsche",
				"Tesla",
				"Bugatti",
				"Ferrari",
				"Lamborghini"
			];
	}

	handleChange(event) {
		var searchPhrase = event.target.value;
		var items = this.state.initialItems;
		var filteredItems = [];
		for (var i = 0; i < items.length; i++) {
			var item = items[i];
			if (item.toLowerCase().indexOf(searchPhrase.toLowerCase()) === -1) {
				continue;
			}
			filteredItems.push(item);
		}
		this.setState({items: filteredItems});
		
	}

	
	render() {
		return (
			<div className="form-group row">
				<p/>
				<div className="container-fluid">
					<input className="form-control" type="text" placeholder="Search" onChange={this.handleChange}/>
				</div>
				<p/>
				<BootstrapList items={this.state.items}/>
			</div>
			
		);
 	 }
}

class BootstrapList extends React.Component {
	render() {
		var itemMap = this.props.items.map((item) =>
			<li className="list-group-item" key={item.toString()}>
			      {item}
			</li>
  		);
		return(
			<div className="container-fluid">
				<ul className="list-group">{itemMap}</ul>
			</div>
		)
	}

}

 

class Login extends React.Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleSubmit(event) {
		this.props.onClick(event);
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


class App extends React.Component {
	
	constructor(props) {
		super(props);		
		this.state = {loggedIn: false};
		this.handleClick = this.handleClick.bind(this);	
	}	
	
	handleClick(event) {
		this.setState({ loggedIn: true });
	
	}
	render() {	
		if (this.state.loggedIn) {
			var component = React.createElement(CarFilterList, null);
		} else {
			var component = React.createElement(Login, { onClick: this.handleClick });
		}

		return (
			<div className="container-fluid">
				<div className="App">
					<AppTitle name="Cars"/>
					 { component }
				</div>
			</div>
		);
  	}
}


ReactDOM.render(
        <App/>,
        document.getElementById('root')
);

