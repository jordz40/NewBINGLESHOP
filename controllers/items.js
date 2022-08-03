const {Items,sequelize} = require('../db/models')

const getItem = async(req,res,next) => {
    try{
        const findItems = await Items.findAll({
            attributes: ['item_name','price','stocks','weight','stocks','status']
        })
        res.status(200).json(findItems)
    }
    catch(error){
        next(error)
    }
}

module.exports = {
    getItem
}