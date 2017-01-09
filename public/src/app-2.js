

var HelloOppikone = React.createClass({
	render: function() {
		return (
			<h1>Hello from Oppikone!</h1>
		)
	}
});



var BootstrapList = React.createClass( {
	render:function() {
		
		var itemMap = this.props.items.map(function(item) {
	         	return <li className="list-group-item" key={item}>{item}</li>
		});

		return(
			<div className="container-fluid">
				<ul className="list-group">
					{ itemMap }
				</ul>
			</div>
		)
	}
});


var CarFilterList = React.createClass({
	
	getInitialState:function() {
		
		return {
			items: CarFilterList.getAllItems()
		}
	},

	componentWillMount: function(){
	    this.setState({items: this.state.initialItems})
	},

	handleChange:function(event) {
		var searchPhrase = event.target.value;
		var items = CarFilterList.getAllItems();
		var filteredItems = [];
		for (var i = 0; i < items.length; i++) {
			var item = items[i];
			if (item.toLowerCase().indexOf(searchPhrase.toLowerCase()) === -1) {
				continue;
			}
			filteredItems.push(item);
		}
		this.setState({items: filteredItems});
	},
	render: function() {
		return (
			<div className="form-group row">
				<p/>
				<div className="container-fluid">
					<input className="form-control" type="text" placeholder="Search" onChange={this.handleChange}/>
				</div>
				<p/>
				<BootstrapList items={this.state.items}/>
			</div>
		)
	}
});

CarFilterList.getAllItems = function() {
	return  [
		"Audi",
		"Porsche",
		"Tesla",
		"Bugatti",
		"Ferrari",
		"Lamborghini"
	];
};

/*
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
		$("body").html("")
		
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
}*/

ReactDOM.render(
        <CarFilterList/>,
        document.getElementById('root')
);

