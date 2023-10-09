const mongoose=require('mongoose')

const subCategorySchema=new mongoose.Schema({
    id:{
        type:String,
        unique:true,
        required:[true,"Id of the sub category is not provided"]
    },
    name:{
        type:String,
        required:[true,"Name is not specified"]
    },
    image:[{
        type:String,
        required:[true,"Image name is not mentioned"]
    }]
})

const SubCategory=mongoose.model('SubCategory',subCategorySchema)

module.exports=SubCategory