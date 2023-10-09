const express=require('express')
const clothtypeController=require('../controllers/clothtypeController')

const clothtypeRouter=express.Router()

clothtypeRouter.route('/').get(clothtypeController.getAllClothType).post(clothtypeController.createClothType)
clothtypeRouter.route('/:id').get(clothtypeController.getClothType).patch(clothtypeController.updateClothType).delete(clothtypeController.deleteClothType)

module.exports=clothtypeRouter

