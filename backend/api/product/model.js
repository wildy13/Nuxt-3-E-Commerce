const { DataTypes } = require('sequelize')
const { sequelize } = require('../../config')
const category = require('../category/model')

const products = sequelize.define(
    'products', {
        id : {
            type: DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,
            allowNull : false,
        },

        name : {
            type:  DataTypes.STRING,
            allowNull: false,
        },
        description : {
            type:  DataTypes.TEXT,
            allowNull: false
        },

        stock_quantity : {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: category,
                key: 'id',
            }
        },

        rating: {
            type: DataTypes.DECIMAL(10,2),
        },

        price: {
            type: DataTypes.DECIMAL(12,2),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }

    },
    {
        tableName: 'tbl_products'
    }
)
  
module.exports = products