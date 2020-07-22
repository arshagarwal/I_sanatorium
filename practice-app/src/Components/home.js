import React, { Component } from 'react'
import SearchBar from './Search_bar'
import Header from './Header.js'
import Newsfeed from './News_feed.js'

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
        return (
            <React.Fragment>
            
            
             <SearchBar></SearchBar>
             <Newsfeed posts={this.state.posts}></Newsfeed>
            
            
            </React.Fragment>
        )
    }
}
