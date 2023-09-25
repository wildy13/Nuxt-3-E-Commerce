require('dotenv').config();

const Sequelize = require('sequelize');
const mysql2 = require('mysql2')

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host : 'localhost',
        dialect : process.env.DB_DIALECT,
        dialectModule: mysql2,
        dialectOptions: {
            dateStrings: true,
            typeCast: true,
        },
        pool: {
            max: 10,
            min: 0,
            idle: 10000,
        },
          
    }
)

const config = {
    host : process.env.BACKEND_HOST,
    port : process.env.BACKEND_PORT,
    secret: { session: process.env.SESSION_KEY },
}

module.exports = { sequelize, config }