const mongoose=require('mongoose')

const coverSchema=new mongoose.Schema({
    id:{
        type:String,
        required:[true,"Id is not provided"],
        unique:true
    },
    name:{
        type:String,
        required:[true,"Name of the design is not provided"]
    },
    couponCode:String,
    image:{
        type:String,
        required:[true,"Image is not provided"]
    },
    category:{
        type:mongoose.Schema.ObjectId,
        ref:'Category',
        required:[true,"Category of the product is not mentioned"]
    },
    seller:{
        type:String,
        default:"Zepocket"
    },
    ratingsAverage:{
        type:Number,
        default:4.5,
        min:[1,"Rating must be above 1.0"],
        max:[5,"Rating must be below 5.0"],
        set:val=>Math.round(val*10)/10
    },
    ratingsQuantity:{
        type:Number,
        default:1
    }

})

coverSchema.pre(/^find/,function(next){
    this.populate({
        path:'category',
        select:'id name'
    })
    next()
})

const Cover=mongoose.model('Cover',coverSchema)

module.exports=Cover