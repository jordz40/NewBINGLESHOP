require('dotenv').config()

const app = require('./app')
//const express = require("./app")
const PORT = process.env.PORT ||8000
app.listen(PORT,() => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`)
})
