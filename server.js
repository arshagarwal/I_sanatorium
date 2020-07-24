const express=require('express')
const app=express()
const path=require('path')
var http=require('http')
const server=http.createServer(app)
const port=3000
const credentials=require('./databases/user_cred')
const cors=require('cors')
app.use(cors())
app.use(express.json())


/*credentials.deleteMany({},err=>{
    if(err){
        console.error(err)
    }
})*/
credentials.find({username:'arsh'},(err,cred)=>{
    if(err){
        console.error(err)
    }
    else{
       console.log(`number of user credentials are ${cred.length}`)
    }

})

app.put('/add_cred',(req,res)=>{
    const data=req.body
    credentials.find({username:data.username},(err,cred)=>{
        if(err){
            console.error(err)
        }
        else{
            if(cred.length==0){
            const new_user=new credentials()
            new_user.username=data.username
            new_user.password=data.password
            console.log(new_user)
        
            new_user.save((err,new_user)=>{
                if(err){
                    console.error(err)
                }
            })
            res.json({error:false})
        }
            else{
                res.json({error:true})
            }

        }
    }) 
   
})
// post request that authenticates user
app.post('/verify',(req,res)=>{
    const data=req.body
    console.log(`login data is`)
    console.log(data)
    credentials.find({username:data.username},(err,cred)=>{
       if(err){
           console.error(err)
       }
       else{
           console.log(`credentials from database is ${cred.length}`)
           if(cred.length!=0 && data.password==cred[0].password){
               res.json({verified:true})
           }
           else{
               res.json({verified:false})
           }
       }
    })

})



app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})
