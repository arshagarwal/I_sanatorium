const mongoose=require('mongoose')
// database url
const url='mongodb+srv://arsh:broadband9@sanatorium.mjde0.mongodb.net/test?retryWrites=true&w=majority';
//mongodb+srv://arsh:<password>@sanatorium.mjde0.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology:true})

const db=mongoose.connection
db.on('error',console.error.bind(console,'connection error:'))
db.once('open',()=>{
    console.log('connected to the database')
})

const user_profile_schema=new mongoose.Schema({
    username: {type: String,
               unique:true
             },
    diseases:[]
})
const user_profile=mongoose.model('user_profile',user_profile_schema)

module.exports=user_profile
