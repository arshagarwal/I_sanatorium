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


/*credentials.find({},(err,cred)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`cred are ${cred}`)
        return cred;
    }

})*/

app.post('/add_cred',(req,res)=>{
    const data=req.body 
    console.log(data)
    const new_user=credentials({username:data.username,password:data.password})

    new_user.save((err,new_user)=>{
        if(err){
            console.error(err)
        }
    })
})



app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})
