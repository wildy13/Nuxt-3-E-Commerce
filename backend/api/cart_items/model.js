const { DataTypes } = require('sequelize')
const { sequelize } = require('../../config')
const carts = require('../carts/model')
const products = require('../product/model')

const cart_items = sequelize.define(
    'cart_items', {
        id : {
            type: DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,
            allowNull : false,
        },

        cartId : {
            type:  DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: carts,
                key: 'id',
            }
        },

        productId : {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: products,
                key: 'id'
            }
        },

        quantity: {
            type:  DataTypes.INTEGER,
            allowNull: false
        },

        price: {
            type: DataTypes.DECIMAL(12,3)
        }
    },
    {
        tableName: 'tbl_cart_items'
    }
)

  
module.exports = cart_items