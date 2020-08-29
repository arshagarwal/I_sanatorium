import React, { Component } from 'react'

export default class Med_history extends Component {
    constructor(props){
        super(props)
        this.state={ 
            n_disease:0,
            hist:[['Disease Name','Description']]
        
        }
    }
    
    add_disease(e){
        e.preventDefault();
        const d_name=document.getElementsByClassName('d_name')[0].value
        const disc=document.getElementsByClassName('description')[0].value
        
        
       this.setState((state,props)=>({
        n_disease: state.n_disease+1,
        }))
        this.state.hist.push([d_name,disc])
        const data={
            user:this.props.user,
            diseases: this.state.hist
        }
        
       
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
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          }).then(response=>
              response.json())
              .then((data)=>{
                  if(typeof(data) !=="undefined"){
                      this.setState({hist:data[0].diseases})
                      console.log(`diseases fetched are ${data[0].diseases}`)
                  }
              console.log(`data fetched in component did mount is `)
              console.log(data[0])
                })
          
    }
    delete_dis(e){
        // To do 
        // delete from database
        const disease =e.target.id;
        console.log(`id in delete is ${disease}` )
        var i=0;
        for(i;i<this.state.hist.length;i++){
             if(this.state.hist[i][0]==disease){
                 this.state.hist.splice(i,1)
                 this.setState((state,props)=>({
                    hist: this.state.hist,
                    n_disease:this.state.n_disease-1
                    }))
                 break;
             }
        }
        const data={
            user:this.props.user,
            diseases: this.state.hist
        }
        
       
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
    

    render() {
        console.log(`user in med_history is ${this.props.user}`)
        const history_style={
          flex:5
        }
       const btnstyle={
        backgroundColor:'#FFFFFF', 
        fontStyle:'italic', 
        fontSize:'20px',
        flexGrow:1,


       }
        return (
           
            <div style={{display:'flex',flexDirection:'column'}}>
                 
                <div style={{display:'flex',flexWrap:"wrap",flex:10}}>
                <input type='text' className='d_name' style={{flexGrow:1,fontSize:"20px",height:'50px'}} placeholder="Name of disease"></input>      
                <input type='text' className='description' style={{flexGrow:5,fontSize:"20px", fontStyle:"italic"}} placeholder="Description of disease"></input>   
                <button style={btnstyle} onClick={(e)=> this.add_disease(e)} > Add Disease </button>
                </div>
                     
               
                
                <div className='History' style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',flex:3}}>
                {
                
                this.state.hist.map((disease,index) => (

                  <div style={{display:'flex',margin:'10px'}}>
                      <div style={{flex:1,border:'1px solid #DCDCDC',fontSize:'20px',fontStyle:'italic'}}>
                        {disease[0]}
                      </div>
                      <div style={{flex:5,border:'1px solid #DCDCDC',fontStyle:'italic'}}>
                          <p>{disease[1]}</p>    
                      </div>
                      <div style={{flex:0.5}}>
                          <button id={disease[0]} style={{backgroundColor:'#FFFFFF',fontStyle:'italic'}} onClick={(e)=>this.delete_dis(e)}>Delete</button>
                      </div>



                  </div>
                ))}
            
                </div>
                
            </div>
        )
    }
    
}


