const CoverModel=require("../models/coverModel")
const factory=require("./handleFactory")

exports.getAllCovers=factory.getAll(CoverModel)

exports.getCover=factory.getOne(CoverModel)

exports.createCover=factory.createOne(CoverModel)

exports.deleteCover=factory.deleteOne(CoverModel)

exports.updateCover=factory.updateOne(CoverModel)