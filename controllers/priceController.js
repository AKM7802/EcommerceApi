const PriceModel=require('../models/priceModel')
const factory=require('./handleFactory')

exports.getAllPrices=factory.getAll(PriceModel)
exports.getPrice=factory.getOne(PriceModel)
exports.createPrice=factory.createOne(PriceModel)
exports.updatePrice=factory.updateOne(PriceModel)
exports.deletePrice=factory.deleteOne(PriceModel)