import React, { Component } from 'react'

export class BootstrapList extends React.Component {
	render() {
		var itemMap = this.props.items.map((item) =>
			<li className="list-group-item" data-id={item.id} key={item.name.toString()}>
			      {item.name}
			</li>
  		)
		return(
			<div className="container-fluid">
				<ul className="list-group">{itemMap}</ul>
			</div>
		)
	}

}
