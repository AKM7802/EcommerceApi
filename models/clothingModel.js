const mongoose=require('mongoose')

const clothingSchema=new mongoose.Schema({
    id:{
        type:String,
        required:[true,"Cloth Id is not provided"],
        unique:true
    },
    name:{
        type:String,
        required:[true,"Name is not specified."]
    },
    clothType:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ClothType",
        required:[true,"Type of the cloth is not specified."]
    },
    seller:{
        type:String,
        required:[true,"Seller is not specified."]
    },
    colors:[{
        type:String,
        required:[true,"The colors of the cloth is not mentioned"]
    }],
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:[true,"Category is not specified."]
    },
    image:[{
        type:String,
        required:[true,"Images are not specified"]
    }],
    subCategory:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'SubCategory'
    }]

})

clothingSchema.pre(/^find/,function(next){
    this.populate({
        path:'clothType',
        select:'id name size'
    }).populate({
        path:'category',
        select:'id name'
    }).populate({
        path:'subCategory',
        select:"id name"
    })
    next()
})

const Clothing=mongoose.model('Clothing',clothingSchema)

module.exports=Clothing