const express=require('express')
const coverController=require('../controllers/coverController')

const coverRouter=express.Router()

coverRouter.route('/').get(coverController.getAllCovers).post(coverController.createCover)
coverRouter.route('/:id').get(coverController.getCover).patch(coverController.updateCover).delete(coverController.deleteCover)

module.exports=coverRouter

