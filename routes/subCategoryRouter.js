const express=require('express')
const subCategoryController=require('../controllers/subCategoryController')

const subCategoryRouter=express.Router()

subCategoryRouter.route('/').get(subCategoryController.getAllSubCategory).post(subCategoryController.createSubCategory)
subCategoryRouter.route('/:id').get(subCategoryController.getSubCategory).patch(subCategoryController.updateSubCategory).delete(subCategoryController.deleteSubCategory)

module.exports=subCategoryRouter

