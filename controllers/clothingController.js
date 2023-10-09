const ClothingModel=require('../models/clothingModel')
const factory=require('./handleFactory')

exports.getAllClothing=factory.getAll(ClothingModel)

exports.getClothing=factory.getOne(ClothingModel)

exports.createClothing=factory.createOne(ClothingModel)

exports.deleteClothing=factory.deleteOne(ClothingModel)

exports.updateClothing=factory.updateOne(ClothingModel)