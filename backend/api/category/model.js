const { DataTypes } = require('sequelize')
const { sequelize } = require('../../config')
const category = sequelize.define(
    'category', {
        id : {
            type: DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,
            allowNull : false,
        },

        name : {
            type:  DataTypes.STRING,
            allowNull: false,
            unique: {
                args:  true,
                msg: "This Category already taken,  Please Take another one!"
            }
        },

    },
    {
        tableName: 'tbl_category'
    }
)

  
module.exports = category