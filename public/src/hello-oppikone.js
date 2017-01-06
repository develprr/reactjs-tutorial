
var HelloOppikone = React.createClass({
	render: function() {
		return React.createElement("h1",null,"Hello From Oppikone!");
	}
});

ReactDOM.render( 
	React.createElement(HelloOppikone,null),
	document.getElementById('root')

);
