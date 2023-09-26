require("dotenv").config();

const Sequelize = require("sequelize");
const mysql2 = require("mysql2");

const sequelize = new Sequelize(process.env.MYSQL_CONNECT_URI, {
  host: process.env.DB_HOST,
  dialect: process.env.DIALECT,
  dialectModule: mysql2,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const config = {
  host: process.env.BACKEND_HOST,
  port: process.env.BACKEND_PORT,
  secret: { session: process.env.SESSION_KEY },
};

module.exports = { sequelize, config };
