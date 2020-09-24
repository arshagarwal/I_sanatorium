const express=require('express');
const router=express.Router();
const credentials=require('../databases/user_cred')


router.post('/verify',(req,res)=>{
    const data=req.body
    
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

router.put('/add_cred',(req,res)=>{
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
module.exports=router;