import React, { Component } from 'react'

export default class posts extends Component {
    render() {
        return (
            <div style={ {display:'flex', flexDirection:'column' } }>
                <h1 > {this.props.username} </h1>
                <p> {this.props.discription} </p>
                
                
            </div>
        )
    }
}
