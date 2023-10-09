const OrdersModel=require('../models/ordersModel')
const factory=require('./handleFactory')

exports.getAllOrders=factory.getAll(OrdersModel)

exports.getOrders=factory.getOne(OrdersModel)

exports.createOrders=factory.createOne(OrdersModel)

exports.deleteOrders=factory.deleteOne(OrdersModel)

exports.updateOrders=factory.updateOne(OrdersModel)