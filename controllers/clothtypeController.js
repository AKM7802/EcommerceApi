const ClothTypeModel=require('../models/clothtypeModel')
const factory=require('./handleFactory')

exports.getAllClothType=factory.getAll(ClothTypeModel)

exports.getClothType=factory.getOne(ClothTypeModel)

exports.createClothType=factory.createOne(ClothTypeModel)

exports.deleteClothType=factory.deleteOne(ClothTypeModel)

exports.updateClothType=factory.updateOne(ClothTypeModel)