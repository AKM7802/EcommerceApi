const app=require('./index.js')
const dotenv=require('dotenv')
const mongoose=require('mongoose')

dotenv.config({path:"./config.env"})

const db=process.env.DATABASE_CLOUD

mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("DB Connection Successful"))

const port=process.env.PORT || 3030
const server=app.listen(port,()=>console.log("Server Started"))

