const Joi = require("joi")

const orderSchema = Joi.object({
    items: Joi.array().items(Joi.object({
        item_name: Joi.string().required(),
        items_id: Joi.number().required(),
        item_qty: Joi.number().required()
    }))
    
})

module.exports = orderSchema