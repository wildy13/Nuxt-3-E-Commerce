const { DataTypes } = require('sequelize')
const { sequelize } = require('../../config')
const user = require('../user/model')

const carts = sequelize.define(
    'carts', {
        id : {
            type: DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,
            allowNull : false,
        },

        userId : {
            type:  DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: user,
                key: 'id',
            },
            unique: {
                args:  true,
                msg: "This Cart already  taken"
            }
        },

    },
    {
        tableName: 'tbl_carts'
    }
)

  
module.exports = carts