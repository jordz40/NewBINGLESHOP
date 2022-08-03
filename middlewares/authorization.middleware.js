require('dotenv').config()
const jwt = require('jsonwebtoken')

const authorization = (user) => ( req,res,next) => {
    console.log(req.user_id)
    console.log(req.user)
    try{
        //get token from header
        const {authorization} = req.headers
        const token = authorization.split(" ")[1] 
        
        //verify token using jwt
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        //cek apakah user yang diakses sudah sesuai
        if(decoded.user !== user) {
            throw {
                code: 403,
                message: 'user not allowed'
            }
        }
        req.user_id = decoded.user_id
        req.user = decoded.user

    next()
    }
    catch(error){
        next({code: error.code || 401, message: error.message || 'invalid token'})

    }
}

module.exports = {
    authorization
}