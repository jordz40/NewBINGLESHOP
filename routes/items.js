const {getItem}= require('../controllers/items')
const router = require('express').Router()
router.get('/getItem',getItem)
module.exports = router