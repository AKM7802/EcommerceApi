const express=require('express')
const ordersController=require('../controllers/ordersController')

const ordersRouter=express.Router()

ordersRouter.route('/').get(ordersController.getAllOrders).post(ordersController.createOrders)
ordersRouter.route('/:id').get(ordersController.getOrders).patch(ordersController.updateOrders).delete(ordersController.deleteOrders)

module.exports=ordersRouter

