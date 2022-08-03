const Sequelize = require('sequelize')
const sequelize = require('./sequelize')

class Users extends Sequelize.Model{}

Users.init({
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.DataTypes.STRING
    },
    address: {
        type: Sequelize.DataTypes.STRING
    },
    password: {
        type: Sequelize.DataTypes.STRING
    },
    phone: {
        type: Sequelize.DataTypes.STRING
    },
    email: {
        type: Sequelize.DataTypes.STRING
    },
    gender: {
        type: Sequelize.DataTypes.STRING
    },

},
    {
        sequelize: sequelize,
        timestamps: true, // created_at update_at delete_at
        underscored: true,// buat underscored table,
        paranoid: true,
        freezeTableName: true,
        modelName: 'Users',
        tableName: 'users',
    }
)

module.exports = Users