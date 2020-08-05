import React, { Component } from 'react'

export default class News_feed extends Component {
    
    render() {
        return this.props.posts.map((post)=>(
            <div style={{display:'flex', flexDirection:'column'}}>
            <h1 style={{alignSelf:'flex-start',paddingLeft:'10px'}}> {post.username}</h1>
            <div style={{display:'flex',flexWrap:'wrap', background:'rgb(47,79,79)',  padding:'20px',paddingTop:'10px',borderColor:'Red',borderStyle:'solid'  } }>

                 <p style={{paddingLeft:'20px', color:'#FFFAFA',flex:'1'}}>{post.discription}
                 
            
            </p> 
            <p style={{paddingLeft:'0px', color:'#FFFAFA',flex:'1'}}>{post.discription}
                 
            
                 </p> 
             
            </div>
             
            </div>
            

        ))
    }
}
