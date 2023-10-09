const express=require('express')
const cors=require('cors')
const ErrorController=require("./controllers/errorController")
const coverRouter=require('./routes/coverRouter')
const mobileRouter=require('./routes/mobileRouter')
const userRouter=require('./routes/userRoutes')
const priceRouter=require('./routes/priceRouter')

const categoryRouter=require('./routes/categoryRouter')
const clothingRouter=require('./routes/clothingRouter')
const clothtypeRouter=require('./routes/clothtypeRouter')
const ordersRouter=require('./routes/ordersRouter')
const subCategoryRouter=require('./routes/subCategoryRouter')

const app=express()

app.use(cors())
app.options('*',cors())

app.use(express.json())

app.use('/api/mobiles',mobileRouter)
app.use('/api/covers',coverRouter)
app.use('/api/users',userRouter)
app.use('/api/prices',priceRouter)
app.use('/api/categories',categoryRouter)
app.use('/api/clothings',clothingRouter)
app.use('/api/clothtypes',clothtypeRouter)
app.use('/api/orders',ordersRouter)
app.use('/api/subcategories',subCategoryRouter)


app.use('/',(req,res)=>{
    res.end("Welcome to Zepocket home page.")
})


app.use(ErrorController)
module.exports=app

