const mongoose=require('mongoose')

const clothTypeSchema=new mongoose.Schema({
    id:{
        type:String,
        required:[true,"Id is not specified"],
        unique:true
    },
    name:{
        type:String,
        required:[true,"Name is not specified"]
    },
    size:[{
        type:String,
        required:[true,"Size is not specified"]
    }]
})



const ClothType=mongoose.model('ClothType',clothTypeSchema)
module.exports=ClothType