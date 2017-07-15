import React, { Component } from 'react';

export class AppTitle extends React.Component {
    render(){
        return (
            <h3>This is a Bootstrap / ReactJS Demo App for {this.props.name}</h3>
        );
    }
}
