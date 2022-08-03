const Users = require('./users')
const Items = require('./items')
//const Sequelize = require('sequelize');
const sequelize = require('./sequelize');
const Orders = require('./orders')
const OrderItem = require('./order_items');
//const { belongsTo, belongsToMany } = require('./users');


Items.belongsTo(Users, {
  as: 'Users',
  foreignKey: 'user_id'
})
Users.hasMany(Items,{
  as:'items',
  foreignKey: 'user_id'
})
Orders.belongsTo(Users,{
  as: 'users',
  foreignKey: 'user_id'
})
Orders.hasMany(Items,{
  as:'items',
  foreignKey:'order_id'
})
Users.hasMany(Orders,{
  as: 'orders',
  foreignKey: 'user_id'
})
OrderItem.belongsTo(Orders,{
  as: 'orders',
  foreignKey:'order_id'
})
Orders.hasMany(OrderItem,{
  as: 'order_items',
  foreignKey:'order_id'
})
OrderItem.belongsTo(Items,{
  as: 'items',
  foreignKey: 'items_id'
})
Items.hasMany(OrderItem,{
  as: 'order_items',
  foreignKey:'Order_id'
})

module.exports = {
  sequelize,
  Users,
  Items,
  Orders,
  OrderItem
}
