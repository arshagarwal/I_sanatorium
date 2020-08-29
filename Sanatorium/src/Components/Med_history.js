import React, { Component } from 'react'

export default class Med_history extends Component {
    constructor(props){
        super(props)
        this.state={ 
            n_disease:0,
            hist:[]
        
        }
    }
    
    add_disease(e){
        e.preventDefault();
        const d_name=document.getElementsByClassName('d_name')[0].value
        const disc=document.getElementsByClassName('description')[0].value
        
        
       this.setState((state,props)=>({
        n_disease: state.n_disease+1,
        }))

        const data={
            user:this.props.user,
            diseases: this.state.hist
        }
        
       this.state.hist.push([d_name,disc])
       // making a post request to add data to database
       const url="http://localhost:8080/add_disease";
        fetch(url, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
         },
        body: JSON.stringify(data),
           })
      
    }
    componentDidMount() {
        // fetching the diseases from the database
        const url="http://localhost:8080/get_disease";
        console.log(`user  in component did mount is ${this.props.user}`)
        const data={user:this.props.user}
        fetch(url, {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          }).then(response=>{
              response.json()})
              .then(data=>{
                  if(typeof data !=="undefined"){
                      this.state.setState({hist:data.diseases})
                      console.log(`diseases fetched are ${data.diseases}`)
                  }
              console.log(`data fetched in component did mount is ${data}`)
          })
          
    }
    

    render() {
        console.log(`user in med_history is ${this.props.user}`)
        const history_style={
          flex:5
        }
       const btnstyle={
        backgroundColor:'#FFFFFF', 
        fontStyle:'italic', 
        fontSize:'20px',
        flexGrow:2,


       }
        return (
           
            <div >
                 
                <div style={{display:'flex',width:"100vw",flexWrap:"wrap"}}>
                <input type='text' className='d_name' style={{flexGrow:1,fontSize:"20px",height:'20px'}} placeholder="Name of disease"></input>      
                <input type='text' className='description' style={{flexGrow:10,fontSize:"20px", fontStyle:"italic",height:"20px"}} placeholder="Description of disease"></input>   
                <button style={btnstyle} onClick={(e)=> this.add_disease(e)} > Add Disease </button>
                </div>
                     
               
                
                <div className='History' style={{display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
                {this.state.hist.map((disease,index) => (
                  <p style={{flex:1, fontSize:'30px',alignSelf:'flex-start',margin:'10px'}}>
                  {` ${disease[0]} :  ${disease[1]} ` }
                    </p>
                    
        
                    ))}

               
                </div>
                
            </div>
        )
    }
    
}


