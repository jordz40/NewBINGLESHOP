const { register, login }= require('../controllers/users')


const validation= require('../middlewares/validation.middleware')
const loginSchema = require('../validations/login.schema')
const registerSchema = require('../validations/register.schema')

const router = require('express').Router()

router.post('/register',validation(registerSchema), register)
router.post('/login',validation(loginSchema),login)


module.exports = router
