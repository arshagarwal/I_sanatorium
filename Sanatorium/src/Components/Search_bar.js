import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
  import {withRouter, Redirect} from 'react-router-dom';
  import Profile from './Profile'


class Search_bar extends Component {
    
    redirect(e){
        e.preventDefault();
        this.props.history.push('/Profile')

    }
    
    render() {
        return (
            <Router>
             <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap'}}>
                <form style={form_style}>
                <br />
                <input type='text' placeholder= 'Search for a user' style={{flex:5, padding: '10px'}}/>
                <input type='submit'
                value='Search'
                style={{flex:1}}
                />
               
                
                </form>
                 
            </div>
            
            </Router>
            
        )
    }
}
const form_style= {display : 'flex', flexDirection: 'row',flex:15};
 export default withRouter(Search_bar);