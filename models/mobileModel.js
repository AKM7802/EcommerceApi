const mongoose=require('mongoose')

const mobileSchema=new mongoose.Schema({
    brand:{
        type:String,
        required:[true,"Product name cannot be left black"]
    },
    model:{
        type:[{
            modelName:{type:String,required:[true,"Model name must be specifed"]},
            modelId:{type:String,required:[true,"Model Id is not specified"]},
            image:{type:String,required:[true,"Model Image must be provided"]},
            materialG:{type:Boolean,default:false}
        }],
        required:[true,'Model cannot be left blank'],
        unique:true
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
        default:0
    },
    id:{
        type:String,
        unique:true,
        required:[true,"Product Id must be given inorder to continue."]
    }

})



const Mobile=mongoose.model('Mobile',mobileSchema)

module.exports=Mobile

