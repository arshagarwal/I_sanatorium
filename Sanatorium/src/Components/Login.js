import React, { Component } from 'react'
import {withRouter, Redirect} from 'react-router-dom';


 class Login extends Component {

    constructor(props){
        super(props)
        this.state={
            signedup:false
        }
        
    }
    
     
    async  handle_signup(e){
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
        const url="http://localhost:2000/add_cred" // add url here
        const response = await fetch(url, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
        response.json().then(data=>{
            console.log(data.error)
            if(data.error){
                alert("Username exists")
            }
            else{
                // handle conditional login doesn't work for now 
                this.setState({signedup:true})
                    
                
            }
        }) // parses JSON response into native JavaScript objects
        }
        async handle_login(e){
            /* Makes a post request to the server
               the server authenticates user credentials
               then redirects to the home page. 
            */ 
           e.preventDefault();
           this.props.history.push('/home')
           const data={
            username:document.getElementById('user_name').value,
            password:document.getElementById('pass').value
        }
           console.log(data) 
            const url="http://localhost:2000/verify";
            const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
          const cred = response.json().then((data)=>{
              console.log(data)
              if(data.verified==true){
                  this.props.history.push('/home')
              }
            }  )
         
         
         
          
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
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop: '100px',flexDirection:'column'}}>
                <form style={form_style}  onSubmit={(e)=>this.handle_submit(e)}>
                    <label htmlFor = 'user_name' style={{color:'#FFFAFA',margin:'10px',alignSelf:'flex-start'}}> Username </label>
                    <input type={'text'} id='user_name' style={{margin:'10px'}} ></input>
                    <label htmlFor='pass' style={{color:'#FFFAFA',margin:'10px',alignSelf:'flex-start'}}> Password </label>
                    <input type='password' style={{margin:'10px'}} id='pass'></input>
                    <input type='submit' style={{margin:'10px', marginTop:'20px'}} value='Log in' onClick={(e)=>this.handle_login(e)}></input>
                    <input type='submit' style={{margin:'10px', marginTop:'10px'}} value='Sign up' onClick={(e)=>this.handle_signup(e)}></input>
                </form>
                <h3> {this.state.signedup ? 'New Account Created' : null }</h3>
            </div>
           
        )
    }
    
}
export default withRouter(Login);


