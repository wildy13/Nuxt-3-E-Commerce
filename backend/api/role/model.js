const { DataTypes } = require('sequelize')
const { sequelize } = require('../../config')

const role = sequelize.define(
    'role', {
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

    },
    {
        tableName: 'tbl_role'
    }
)
  
module.exports = role