const Joi = require("joi")

const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().min(3).required(),
    address: Joi.string().required(),
    password:Joi.string().min(5).required(),
    phone:Joi.string().min(4).required(),
    gender:Joi.string().required()
})

module.exports = registerSchema