const { DataTypes } = require('sequelize')
const { genSaltSync, hashSync, compareSync } = require('bcrypt');
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

        password : {
            type : DataTypes.STRING,
            allowNull: false, 
            set(value) {
                const salt = genSaltSync(10);
                this.setDataValue('password', hashSync(value, salt));
            }
        }
    },
    {
        tableName: 'tbl_user'
    }
)

user.prototype.authenticate = function compare(password) {
    const pwgen = compareSync(password, this.password);
  
    if (pwgen) {
      return true;
    }
    return false;
  };
  
module.exports = user