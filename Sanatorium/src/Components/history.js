import React, { Component } from 'react'
import Options from './Options'
import History from './Med_history'

export default class history extends Component {
    render() {
        console.log(`user in profile is ${this.props.location.state.user}`)
        return (
           
            <div style={{display:'flex'}} >
                <div style={{}}>
                    <Options user={this.props.location.state.user}></Options></div>
                <div style={{flex:5}}>
                <History  user={this.props.location.state.user}></History>
                </div>
                
            </div>
        )
    }
}
