import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header.js'
import Login from './Components/Login.js'
import Home from './Components/home.js'
import history from './Components/history.js'
import AddPost from './Components/AddPost.js';

export default class App extends Component {


  render() {
     
    return (
        <Router> 
          <div className='App' style={{marginTop:'0px'}}>
          
            
              <Header></Header>
            {/* This is rendered in the index page */}      
            <Route exact style={{marginTop:'0px'}} path='/' render={(props)=>(
       <div style={{display:'flex',justifyContent:'center'}}>
         {/* add  a  background in this div */}
       <Link to='/login' style={{color:'#000000', fontSize:'large',paddingRight:'10px' }}> Login </Link>
       <Link to='/' style={{color:'#000000', fontSize:'large' }}> Index </Link>
       
       </div>
 
   
    )}>

    </Route>
    

      <Route exact path='/home' component={Home}></Route>
      <Route  exact path='/login' component={Login}></Route>
      <Route exact path='/history' component={history}></Route>
      <Route exact path='/add_post' component={AddPost}></Route>
     
        
      </div>  
           </Router>
        
      
      
    );
   
  }


}


