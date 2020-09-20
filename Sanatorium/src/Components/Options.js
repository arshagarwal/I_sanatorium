/*
Options list for User Profile to navigate through web pages 
*/ 
import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

class Options extends Component {

    constructor(props){
        super(props)
        this.button_style;
    }
    
    navigate(e) {
        e.preventDefault()
        if(e.target.className==='home'){
            this.props.history.push({
                pathname:'/home',
            state:{user:this.props.user}
         })
           //this.props.history.push('/home')
        }
        else if(e.target.className==='Medical History') {
            this.props.history.push({
                pathname:'/history',
            state:{user:this.props.user}
         })
            
        }
        else if(e.target.className==='add_post') {
            this.props.history.push({
                pathname:'/add_post',
            state: {user:this.props.user}
         })
            
        }

    }
    hover(e){
      this.button_style.backgroundColor='red'
    }
    
    render() {
        console.log(`user in options is ${this.props.user}`)
        var style={
           display:'flex',
           flexDirection:'column',
           alignContent:'space-between',
           paddingTop:'10px',
           

        }
        var button_style={ marginBottom:'20px', 
        backgroundColor:'#FFFFFF', 
        fontStyle:'italic', 
        fontSize:'20px',
        border:'none',
       
    }
    this.button_style=button_style 
        return (
            <div style={style}>
                {/* fix hover throws error for now */}
            <button className = {'profile'} style={this.button_style} onClick={(e)=> this.navigate(e)}>Profile</button> 
            <button className = {'home'} style={this.button_style} onClick={(e)=> this.navigate(e)}>Home</button>  
            <button className={'Medical History'} style ={this.button_style} onClick={(e)=> this.navigate(e)} onMouseEnter={(e)=>this.hover(e)}> Med History</button>
            <button className = {'chat'} style={this.button_style} onClick={(e)=> this.navigate(e)}>Chat</button>
            <button className = {'add_post'} style={this.button_style} onClick={(e)=> this.navigate(e)}>Add Post</button>
             
             
        </div>
        )
    }
    
}
export default withRouter(Options);