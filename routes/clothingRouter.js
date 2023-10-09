const express=require('express')
const clothingController=require('../controllers/clothingController')

const clothingRouter=express.Router()

clothingRouter.route('/').get(clothingController.getAllClothing).post(clothingController.createClothing)
clothingRouter.route('/:id').get(clothingController.getClothing).patch(clothingController.updateClothing).delete(clothingController.deleteClothing)

module.exports=clothingRouter

