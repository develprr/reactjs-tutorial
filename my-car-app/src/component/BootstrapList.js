import React, { Component } from 'react'

export class BootstrapList extends React.Component {
	render() {
		var itemMap = this.props.items.map((item) =>
			<li className="list-group-item" key={item.toString()}>
			      {item}
			</li>
  		)
		return(
			<div className="container-fluid">
				<ul className="list-group">{itemMap}</ul>
			</div>
		)
	}

}
