require('dotenv').config()
const {Users,Items,OrderItem,Orders,sequelize} = require('../db/models')
const bcrypt = require('bcrypt')

//const {tokenHandler} = require('./handler')
// const { off } = require('../app')
// const { password } = require('../config/config')
// const { add } = require('date-fns')
const jwt = require('jsonwebtoken')


const register = async (req, res, next) => {
    try { 
        const bodies = req.body
        
        const isUserExist = await Users.findOne({
            where: {
                email: bodies.email
            },
            attributes: ['id']
        })

        if(isUserExist){
            throw{
                code:400,
                message:'Email already exist'
            }
        }

        const hasedPassword = bcrypt.hashSync(bodies.password,12)

       const user = await Users.create({
        email: bodies.email,
        password: hasedPassword,
        address: bodies.address,
        name: bodies.name,
        phone: bodies.phone,
        gender: bodies.gender
       })

       return res.status(200).json({
        code:200,
        message: 'succes create User',
        data: {
            name:user.name,
            email:user.email,
            address: user.address,
            phone: user.phone,
            gender: user.gender
        }
       })

    } catch (error){
        next(error)
    }
}

const login = async (req, res, next) => {
    try{
        const bodies = req.body
        const isUserExist = await Users.findOne({
            where: {
                email: bodies.email
            },
            attributes: ['password']
        })
        if (!isUserExist) {
            throw{
                code:400,
                message: 'account not found'
            }
        }
        const comparePassword = await bcrypt.compare(bodies.password, isUserExist.password)



        if(!comparePassword){
            throw{
                code:400,
                message: 'wrong password'
            }
        }

        const payload = {
            id:isUserExist.id
        }
        const token = jwt.sign({id:isUserExist.id},process.env.JWT_SECRET,{
            expiresIn:process.env.JWT_EXPIRES_IN
        } )


        return res.status(200).json({
            code: 200,
            message: "login succesfull",
            token:token

        })
    }
    catch(error) {
        next(error)
    }
}

module.exports = {
    register, login 
}