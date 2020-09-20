const express=require('express')
const app=express()
const path=require('path')
var http=require('http')
const port=process.env.port || 8080

// importing routes
const profile_router=require('./Routes/profile.js')
const cred_router=require('./Routes/creds')
const cors=require('cors')
const { update } = require('./databases/user_cred')
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, "/Sanatorium/build")));


app.use('/cred',cred_router);
app.use('/profile',profile_router)

app.get("/*", (req, res) => {
    
    res.sendFile(path.join(__dirname, "/Sanatorium/build/index.html"));
  });



app.listen(port,()=>{
    
    console.log(`server running on port ${port}`)
})
