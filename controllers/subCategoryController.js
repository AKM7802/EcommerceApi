const SubCategoryModel=require('../models/subCategoryModel')
const factory=require('./handleFactory')

exports.getAllSubCategory=factory.getAll(SubCategoryModel)

exports.getSubCategory=factory.getOne(SubCategoryModel)

exports.createSubCategory=factory.createOne(SubCategoryModel)

exports.deleteSubCategory=factory.deleteOne(SubCategoryModel)

exports.updateSubCategory=factory.updateOne(SubCategoryModel)