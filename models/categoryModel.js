const mongoose=require('mongoose')

const categorySchema=mongoose.Schema({
    id:{
        type:String,
        unique:true,
        required:[true,"Category Id needs to be provided"]
    },
    name:{
        type:String,
        required:[true,"Category Name need to be provided"]
    },
    image:{
        type:String,
        required:[true,"Category Image is not specified"]
    }
})



const Category=mongoose.model('Category',categorySchema)

module.exports=Category