const mongoose=require('mongoose')

const priceSchema=new mongoose.Schema({
    id:{
        type:String,
        unique:true
    },
    casePrice:{
        type:[{
            hardCasePrice:{
                type:{
                    sellingPrice:Number,
                    mrp:Number
                },
                required:[true,"Price of the hard case is not provided"]
            },
            glassCasePrice:{
                type:{
                    sellingPrice:Number,
                    mrp:Number
                },
                required:[true,"Price of the glass cases are not specified"]
            }
        }],
        required:[true,"Provide the prices of case"]
    },
    clothingPrice:{
        type:[{
            tshirtPrice:{
                type:{
                    sellingPrice:Number,
                    mrp:Number
                },
                required:[true,'Tshirt price is not specified']
            },
            oversizedPrice:{
                type:{
                    sellingPrice:Number,
                    mrp:Number
                },
                required:[true,'Oversized price is not specified']
            },
            hoodiePrice:{
                type:{
                    sellingPrice:Number,
                    mrp:Number
                },
                required:[true,'Hoodie price is not specified']
            }
        }]
    }
})

const Price=mongoose.model("Price",priceSchema)

module.exports=Price