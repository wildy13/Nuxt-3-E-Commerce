require('dotenv').config();

const Sequelize = require('sequelize');
const mysql2 = require('mysql2')

const sequelize = new Sequelize(
    process.env.MYSQL_CONNECT_URI,
    {
        dialect: 'mysql2',
        dialectModule: mysql2,
    }
)

const config = {
    host : process.env.BACKEND_HOST,
    port : process.env.BACKEND_PORT,
    secret: { session: process.env.SESSION_KEY },
}

module.exports = { sequelize, config }