const express=require('express')
const app=express()
const path=require('path')
var http=require('http')
const server=http.createServer(app)
const port=process.env.port || 8080
const credentials=require('./databases/user_cred')
const user_profile=require('./databases/user_profile')
const cors=require('cors')
const { update } = require('./databases/user_cred')
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, "/Sanatorium/build")));



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
           
           if(cred.length!=0 && data.password==cred[0].password){
               res.json({verified:true})
           }
           else{
               res.json({verified:false})
           }
       }
    })

})
app.post('/get_disease',(req,res)=>{
    const data=req.body;
    const user=data.user
    console.log(`${user} is fetching disease from the database`)
    user_profile.find({username:user},(err,profile)=>{
        if(err){
            console.error(err)
        }
        else{
            console.log(`userprofile is ${profile}`)
            res.json(profile);
        }
    })


})

app.put('/add_disease',(req,res)=>{
    const data=req.body
    const user=data.user
    const new_disease=data.diseases
    console.log(data.diseases)
    user_profile.find({username:user},(err,profile)=>{
        if(err){
            console.error(err)
        }
        else{
            if(profile.length==0 ){
                // make a new entry for the user
                const new_entry=user_profile()
                new_entry.username=user
                new_entry.diseases=data.diseases
                new_entry.save((err,new_entry)=>{
                    if(err){
                        console.error(err)
                    }
                    else{
                        console.log(new_entry)
                    }

                })
            }
            else{
                user_profile.findOneAndUpdate({username:user},{diseases:data.diseases},{new:true,useFindAndModify:false})
                .then(doc=>{
               console.log(doc.diseases)
                   })
            }
        }
     })
    
   
})
app.get("/*", (req, res) => {
    
    res.sendFile(path.join(__dirname, "/Sanatorium/build/index.html"));
  });



app.listen(port,()=>{
    
    console.log(`server running on port ${port}`)
})
