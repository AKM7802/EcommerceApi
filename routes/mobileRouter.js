const express=require('express')
const mobileController=require('../controllers/mobileController')

const mobileRouter=express.Router();

mobileRouter.route('/').get(mobileController.getAllmobiles).post(mobileController.createmobile)
mobileRouter.route('/:id').get(mobileController.getmobile).patch(mobileController.updatemobile).delete(mobileController.deletemobile)

module.exports=mobileRouter