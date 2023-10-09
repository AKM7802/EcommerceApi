const mobileModel=require('../models/mobileModel')
const factory=require("./handleFactory")

exports.getAllmobiles=factory.getAll(mobileModel)

exports.getmobile=factory.getOne(mobileModel)

exports.createmobile=factory.createOne(mobileModel)

exports.deletemobile=factory.deleteOne(mobileModel)

exports.updatemobile=factory.updateOne(mobileModel)