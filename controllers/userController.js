const UserModel=require("../models/userModel")
const factory=require("./handleFactory")

exports.getAllUsers=factory.getAll(UserModel)

exports.getUser=factory.getOne(UserModel)

exports.createUser=factory.createOne(UserModel)

exports.deleteUser=factory.deleteOne(UserModel)

exports.updateUser=factory.updateOne(UserModel)