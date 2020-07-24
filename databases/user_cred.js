const mongoose=require('mongoose')
// database url
const url='mongodb+srv://arsh:broadband9@sanatorium.mjde0.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology:true})

const db=mongoose.connection
db.on('error',console.error.bind(console,'connection error:'))
db.once('open',()=>{
    console.log('connected to the database')
})

const credentials_schema=new mongoose.Schema({
    username: {type: String,
               unique:true
             },
    password: String
})
const credentials=mongoose.model('credentials',credentials_schema)

module.exports=credentials






