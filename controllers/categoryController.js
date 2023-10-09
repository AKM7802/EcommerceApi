const CategoryModel=require('../models/categoryModel')
const factory=require('./handleFactory')

exports.getAllCategory=factory.getAll(CategoryModel)

exports.getCategory=factory.getOne(CategoryModel)

exports.createCategory=factory.createOne(CategoryModel)

exports.deleteCategory=factory.deleteOne(CategoryModel)

exports.updateCategory=factory.updateOne(CategoryModel)