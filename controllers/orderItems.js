//const {sequelize, OrderItem} = require('..db/models')
const { sequelize,OrderItem, Items } = require('../db/models')

const createOrderItems = async (req, res, next) => {
    try{
        await sequelize.transaction(async trx => {
            const items = await OrderItem.create({...createOrderItems}, {transaction: trx})

            await OrderItem.create({
                order_date: new Date(),
                item_name: items.item_name,
                items_id: items.id,
                item_qty: OrderItem.item_qty
            }, {
                transaction: trx
            })
        })

        return res.status(201).json({
            message: 'success create Order'
        })
    }
    catch(error){
        next(error)
    }
}
module.exports = {
    createOrderItems
}

