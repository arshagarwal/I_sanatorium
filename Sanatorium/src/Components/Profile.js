import React, { Component } from 'react'
import Options from './Options'
import History from './Med_history'

export default class Profile extends Component {
    render() {
        console.log(`user in profile is ${this.props.location.state.user}`)
        return (
           
            <div style={{display:'flex'}} >
                <div style={{flex:0.5}}>
                    <Options user={this.props.location.state.user}></Options></div>
                <div style={{flex:10}}>
                <History  user={this.props.location.state.user}></History>
                </div>
                
            </div>
        )
    }
}
