const express= require('express')
const router=express.Router()
const weatherInfo=require('../controllers/weatherInfo')

router.post('/',weatherInfo)

module.exports = router