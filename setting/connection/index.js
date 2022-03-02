import pool from "../db/index";
import Sequelize from "sequelize";

const sqlz = new Sequelize(pool.DATABASE, pool.USER, pool.PASSWORD, 
    {
        host: pool.HOST,
        port: pool.PORT,
        dialect: pool.DIALECT,
        operatorsAliases: false
    }
);

module.exports = sqlz;
