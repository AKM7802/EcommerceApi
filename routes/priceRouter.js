const express=require('express')
const priceController=require('../controllers/priceController')

const priceRouter=express.Router()

priceRouter.route('/').get(priceController.getAllPrices).post(priceController.createPrice)
priceRouter.route('/:id').get(priceController.getPrice).patch(priceController.updatePrice).delete(priceController.deletePrice)

module.exports=priceRouter
