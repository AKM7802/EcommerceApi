const catchAsync=require('../utils/catchAsync')
const AppError=require('../utils/appError')

exports.getAll=(Model)=>catchAsync(async (req,res,next)=>{
    let doc=await Model.find();

    if(!doc) return next(new AppError('The database is empty!',404))

    res.status(200).json({
        status:"Success",
        results:doc.length,
        data:{
            doc
        }
    })
})

exports.getOne=(Model)=>catchAsync(async (req,res,next)=>{
    const doc=await Model.findOne({id:req.params.id})

    if(!doc) return next(new AppError("No document found with the specified id.",404))
    res.status(200).json({
        status:"Success",
        data:{
            doc
        }
    })
})


exports.createOne=Model=>catchAsync(async (req,res,next)=>{

    if(!req.body) return next(new AppError("No data is provided",404))

    const doc=await Model.create(req.body)

    res.status(200).json({
        status:"Success",
        doc
    })
})

exports.deleteOne=Model=>catchAsync(async (req,res,next)=>{
    const doc=await Model.findOneAndDelete({id:req.params.id})

    if(!doc) return next(new AppError("No documents with the specified id is found to be deleted",404))

    res.status(200).json({
        status:"Success",
        data:null
    })
})

exports.updateOne=Model=>catchAsync(async (req,res,next)=>{
    if(!req.body) return next(new AppError("No data found to be updated",404))

    const doc=await Model.findOneAndUpdate({id:req.params.id},req.body,{
        new:true,
        runValidators:true
    })
    
    if(!doc) return next(new AppError("No document found with the specified id",404))

    res.status(200).json({
        status:"Success",
        updatedData:{doc}
    })
})