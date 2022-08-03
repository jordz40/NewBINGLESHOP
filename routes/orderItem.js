const router = require('express').Router()
const{createOrderItems} = require('../controllers/orderItems')
const validation = require('../middlewares/validation.middleware')
const orderSchema = require('../validations/order.schema')
router.post('',validation(orderSchema),createOrderItems)
module.exports = router
