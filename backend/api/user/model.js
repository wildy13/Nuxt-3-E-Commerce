const { DataTypes } = require('sequelize')
const { sequelize } = require('../../config')

const user = sequelize.define(
    'user', {
        id : {
            type: DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,
            allowNull : false,
        },

        username : {
            type:  DataTypes.STRING,
            allowNull: false,
            unique: {
                args:  true,
                msg: "This Username already taken,  Please Take another one!"
            }
        },


    }
)


module.exports = user