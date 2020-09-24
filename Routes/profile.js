const express=require('express');
const router=express.Router();
const user_profile=require('../databases/user_profile');

router.post('/get_disease',(req,res)=>{
    const data=req.body;
    const user=data.user
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

router.put('/add_disease',(req,res)=>{
    const data=req.body
    const user=data.user
    const new_disease=data.diseases
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
                        
                    }

                })
            }
            else{
                user_profile.findOneAndUpdate({username:user},{diseases:data.diseases},{new:true,useFindAndModify:false})
                .then(doc=>{
              
                   })
            }
        }
     })
    })
module.exports=router;     