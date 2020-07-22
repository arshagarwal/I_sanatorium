import React, { Component } from 'react'
import {withRouter, Redirect} from 'react-router-dom';


 class Login extends Component {

    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
        this.handle_login=this.handle_login.bind(this);
        
    }
    
     
    async handle_signup(e){
        /* Makes a post request to the server
           The server then adds the credentials to the database.
        */
        e.preventDefault();
        const data={
            username:document.getElementById('user_name').value,
            password:document.getElementById('pass').value
        }
        console.log(data)
        // make a fetch request here
        const url="http://localhost:3000/add_cred" // add url here
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
          return response.json(); // parses JSON response into native JavaScript objects
        }
        handle_login(e){
            /* Makes a post request to the server
               the server authenticates user credentials
               then redirects to the home page. 
            */ 
           e.preventDefault();
           <Redirect push to='/home'/>
           //this.props.history.push('/home')
           const data={
            username:document.getElementById('user_name').value,
            password:document.getElementById('pass').value
        }
           /*const url="http://localhost:3000/verify";
           const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
          //data=response.json().then((data)=>{return data;})*/ 
         
          
        }
    componentDidMount(){

    }


    render() {
        const form_style={display:'flex',
    flexDirection:'column',
    backgroundColor:'#2F4F4F',
    padding:'30px',
    width:'400px',
    height:'280px'}
    console.log(this.props)
        return (
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop: '100px'}}>
                <form style={form_style}  onSubmit={(e)=>this.handle_submit(e)}>
                    <label htmlFor = 'user_name' style={{color:'#FFFAFA',margin:'10px',alignSelf:'flex-start'}}> Username </label>
                    <input type={'text'} id='user_name' style={{margin:'10px'}} ></input>
                    <label htmlFor='pass' style={{color:'#FFFAFA',margin:'10px',alignSelf:'flex-start'}}> Password </label>
                    <input type='password' style={{margin:'10px'}} id='pass'></input>
                    <input type='submit' style={{margin:'10px', marginTop:'20px'}} value='Log in' onClick={(e)=>this.handle_login(e)}></input>
                    <input type='submit' style={{margin:'10px', marginTop:'10px'}} value='Sign up' onClick={(e)=>this.handle_signup(e)}></input>
                    <button value='Log in' onClick={(e)=>this.handle_login(e)}  style={{marginTop:'10px',height:'20px'}}></button>
                </form>

            </div>
        )
    }
    
}
export default withRouter(Login);


