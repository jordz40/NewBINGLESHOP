const express = require('express')
const userRouter = require('./routes/users')
//const {sequelize} = require('./db/models')
const itemsRouter = require('./routes/items')
const orderRouter = require('./routes/orderItem')


const app = express()
//sequelize.sync({force: true})

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/auth',userRouter)
app.use('/auth',itemsRouter)
app.use('/orders',orderRouter)


app.use((err,req,res,next) => {
    return res.status(err.code || 500).json({
        message: err.message ||'internal server error'
    })
})


module.exports = app