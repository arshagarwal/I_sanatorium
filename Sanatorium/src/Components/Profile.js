import React, { Component } from 'react'
import Options from './Options'
import History from './Med_history'

export default class Profile extends Component {
    render() {
        console.log(`user in profile is ${this.props.location.state.user}`)
        return (
           
            <div style={{display:'flex'}} >
                <Options user={this.props.location.state.user}></Options>
                <History user={this.props.location.state.user}></History>
            </div>
        )
    }
}
