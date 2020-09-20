import React, { Component } from 'react'
import SearchBar from './Search_bar'
import Header from './Header.js'
import Newsfeed from './News_feed.js'
import Options from './Options'

export default class home  extends Component {
   
  constructor(props){
      super(props)
      this.state={
          posts:[]
      }
  }
  get_posts(){
    const curr_post={username: 'Arsh',discription:'first post'}
    this.state.posts.push(curr_post)
  }

    render() {

        const style={display:'flex', 
        flexDirection:'row' 
    }
    console.log(`user in home is ${this.props.location.state.user}`)
        return (
            <div style={style}>
            <div >
            <Options user={this.props.location.state.user}></Options> 
                </div>    
            <div style={{flex:10}}>
            <SearchBar  ></SearchBar> 
            </div>
            
            </div>
            
            
             
            
            
            
        )
    }
}
