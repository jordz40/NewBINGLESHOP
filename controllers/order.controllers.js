const{Op} = require('sequelize')
const {Items,sequelize,OrderItem,Orders} = require('../db/models')

const createOrder = async(req,res,next) => {
    console.log(req.user_id)
    console.log(req.user)
    try{
        //check itemnya ada gk?
        const {items} = req.body
        const itemsid = items.map(items => {
            return items.items_id
        })
        const existItems = await Items.findAll({
            where: {
                id: {
                    [Op.in]: itemsid
                } 
            },
            include: [
                {
                    model: Items,
                    as:'stocks'
                }
            ]
        })
        if(existItems.length !== items.length){
            throw{
                code:400,
                Message:'item tidak ditemukan'
            }
        }

        await sequelize.transaction(async trx => {

            //create transaction 
            const transaction = await Orders.create({
                user_id: req.user_id,
                order_date: new Date(),
                status: 'BUY'
            }, {
                transaction: trx
            })

                await Promise.all(
                    existItems.map(async items => {
                        const selectedPayload = items.find(val => val.items_id === items.id)
                        //deduct stock item
                        await Items.update({
                            stocks: items.stocks - selectedPayload.qty
                        },{
                            where: {
                                items_id: items.id
                            },
                            transaction: trx
                        })
                        await OrderItem.create({
                            items_id: items.id,
                            transaction_id: transaction.id,
                            stocks: selectedPayload.qty
                        },{
                            transaction: trx
                        })
                    })
                )
        })
        return res.status(200).json({
            message: 'succcces buy book'
        })

    }
    catch(error){
        console.log(error)
        next(error)
    }
}

module.exports = {
    createOrder
}