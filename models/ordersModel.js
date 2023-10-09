const mongoose=require('mongoose')

const ordersSchema=new mongoose.Schema({
    id:{
        type:String,
        required:[true,'Order id is missing'],
        unique:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true,"The category od the order is not specified"],
        ref:'Category'
    },
    products:[{
        type:{
            coverId:String,
            modelId:String,
            brandId:String,
            modelName:String,
            brandName:String,
            clothId:String,
            clothType:String,
            clothSize:String,
            clothColor:String
        },
        required:[true,"Product is not specified"]
    }],
    price:Number,
    deliveryAddress:{
        type:{
            pincode:Number,
            state:String,
            city:String,
            address:String,
            name:String,
            phoneNumber:String
        },
        required:[true,"Delivery Address is not provided"]
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

ordersSchema.pre(/^find/,function(next){
    this.populate({
        path:'userId',
        select:'id'
    }).populate({
        path:'category',
        select:'id name'
    })
    next()
})

const Orders=mongoose.model('Orders',ordersSchema)

module.exports=Orders