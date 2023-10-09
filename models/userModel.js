const mongoose=require('mongoose')
require('mongoose-type-email');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'User name must be specified']
    },
    id:{
        type:String,
        required:[true,'User id must be specified'],
        unique:true
    },
    email:{
        type:mongoose.SchemaTypes.Email,
        required:[true,"Email must be provided"],
        unique:true
    },
    cart:{
        type:[]
    },
    orders:[{type:mongoose.Schema.Types.ObjectId,ref:"Orders"}]

})

userSchema.pre('save',function(next){
    this.populate({
        path:'orders',
        select:'id'
    })
    next()
})

const User=mongoose.model('User',userSchema)

module.exports=User