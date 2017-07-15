var CarModelService = {
	findIds: function() {
		return  [
			"Audi",
			"Porsche",
			"Tesla",
			"Bugatti",
			"Ferrari",
			"Lamborghini"
		];
	},
	findIdsByKey: function(keyword) {
		var models = this.findIds();
		var filteredModels = [];
		for (var i = 0; i < models.length; i++) {
			var item = models[i];
			if (item.toLowerCase().indexOf(keyword.toLowerCase()) === -1) {
				continue;
			}
			filteredModels.push(item);
		}
		return filteredModels;	
	},
	
	fetchCollection:function() {
		return {	
			"Audi": {
				"speed": 170,
				"color": "black",
				"price": 28500,
				"marketShare": []
			},
			"Porsche": {
				"speed": 250,
				"color": "white",
				"price": 61000,
				"marketShare": []
			},
			"Tesla": {
				"speed": 280,
				"color": "green",
				"price": 79000,
				"marketShare": []
			},
			"Ferrari": {
				"speed": 320,
				"color": "red",
				"price": 344000,
				"marketShare": []
			},	
			"Lamborghini": {
				"speed": 334,
				"color": "yellow",
				"price": 521000,
				"marketShare": []
			},		
			"Bugatti": {
				"speed": 420,
				"color": "blue",
				"price": 1591000,
				"marketShare": []
			}		
		}	
	},		
			
	findModelById: function(carModelId) {
		var collection = this.fetchCollection();
		return collection[carModelId]; 
	}

};


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
		this.handleSearchPhraseChange = this.handleSearchPhraseChange.bind(this);
		this.onCarModelSelected = this.onCarModelSelected.bind(this);
		var carModels = CarModelService.findIds();
		this.state = { carModels: carModels, initialCarModels: carModels };
	}

	onCarModelSelected(event) {
		var target = event.target;
		var dataId = $(target).attr("data-id");
		this.props.fireCarModelSelected(dataId);
		event.stopPropagation();
		return false;
	}

	componentDidMount() {
		$(".list-group-item").click(this.onCarModelSelected);
	}



	handleSearchPhraseChange(event) {
		var searchPhrase = event.target.value;
		var filteredModels = CarModelService.findIdsByKey(searchPhrase);	
		this.setState({carModels: filteredModels});		
	}

	
	render() {
		return (
			<div className="form-group row">
				
				<div className="container-fluid">
					 
					<input className="form-control" type="text" placeholder="Search" onChange={this.handleSearchPhraseChange}/>
				</div>
				<p/>
				<BootstrapList items={this.state.carModels}/>
			</div>
			
		);
 	 }
}


class Navigation extends React.Component {

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

class CarDetailView extends React.Component {
	constructor(props) {
		super(props);
	}	
	render() {
		var carModelId = this.props.selectedCarModel;
		var carInfo = CarModelService.findModelById(carModelId);
		return (
			<ul className="list-group">
			  <li className="list-group-item"><h3>{carModelId}</h3></li>
			  <li className="list-group-item">Top Speed: {carInfo.speed}</li>
			  <li className="list-group-item">Color: {carInfo.color}</li>
			  <li className="list-group-item">Price: €{carInfo.price}</li>
			</ul>
		)	
	}
}


class BootstrapList extends React.Component {
	render() {
		var itemMap = this.props.items.map((item) =>
			<li className="list-group-item" data-id={item.toString()} key={item.toString()}>
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

class ManagementView extends React.Component {
	
	constructor(props) {
		super(props);		
		this.state = {loggedIn: true};
		this.handleCarModelSelected = this.handleCarModelSelected.bind(this);
		this.handleLoginSuccess = this.handleLoginSuccess.bind(this);	
		this.handleBackwardRequest = this.handleBackwardRequest.bind(this);
		this.handleExitRequest = this.handleExitRequest.bind(this);
	}	
	
	handleLoginSuccess(event) {
		this.setState({ loggedIn: true });
		$("#navigation-div").show();
	}

	handleCarModelSelected(carModelId) {
		this.setState({ selectedCarModel: carModelId });
	}
	unSelectCarModel() {
		var selectedCarModel = this.selectedCarModel;
		this.setState({ 
			selectedCarModel: null,
			unSelectedCarModel: selectedCarModel
			 
		});
	}
	
	reSelectCarModel() {
		var unSelectedCarModel = this.state.unSelectedCarModel;
		if (unSelectedCarModel) {
			this.setState({ 
				selectedCarModel: unSelectedCarModel	
			});
		}
	}

	handleBackwardRequest() {
		if (this.state.selectedCarModel) {
			this.unSelectCarModel();
		} else {
			this.reSelectCarModel();
		}
	}

	handleExitRequest() {
		this.props.fireExitRequest();
	}

	

	createViewComponent() {
		if (this.state.selectedCarModel) {
			return React.createElement(CarDetailView, {
				fireCloseRequested: this.handleCarModelUnselected, 
				selectedCarModel: this.state.selectedCarModel
			});
		}		 
		return React.createElement(CarFilterList, {fireCarModelSelected: this.handleCarModelSelected } );	

	}
	render() {	
		var viewComponent = this.createViewComponent();	
		return (
			<div className="App">
				<Navigation 
					fireBackwardRequest={this.handleBackwardRequest }
					fireExitRequest={this.handleExitRequest }					
				/>			 
			 	{ viewComponent }
			</div>
	
		);
  	}
}





class App extends React.Component {
	
	constructor(props) {
		super(props);		
		this.state = {loggedIn: true};
		this.handleLoginSuccess = this.handleLoginSuccess.bind(this);	
		this.handleExitRequest = this.handleExitRequest.bind(this);
	}	
	
	handleLoginSuccess(event) {
		this.setState({ loggedIn: true });
	}

	handleExitRequest() {
		this.setState({ loggedIn: false });
	}

	createViewComponent() {
		if (this.state.loggedIn) {
			return React.createElement(ManagementView, { fireExitRequest: this.handleExitRequest });
		} else {
			return React.createElement(Login, { fireLoginSuccess: this.handleLoginSuccess });
		}
	}

	render() {	
		var viewComponent = this.createViewComponent();	
		return (
			<div className="container-fluid">
				<AppTitle name="Cars"/>				
				{viewComponent}
			</div>
		);
  	}
}


ReactDOM.render(
        <App/>,
        document.getElementById('root')
);

