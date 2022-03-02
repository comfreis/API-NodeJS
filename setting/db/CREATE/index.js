import { DataTypes } from 'sequelize';
import pool from '../../connection/index';

const general = pool.define('General',{
    id: {        
        type: DataTypes.INTEGER,    
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    userId: {          
        type: DataTypes.STRING(255),
        allowNull: false
    },
    fullname: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    mail: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    password: {
        type: DataTypes.STRING(36),
        allowNull: false
    },
    asAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},{
    timestamps: false
});

general.sync({force: false}).then(() => {
    console.log('Sucess created General table!')
}).catch((error) => {
    console.log(error)
});

const log = pool.define('Log',{
    id: {        
        type: DataTypes.INTEGER,    
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    userId: {          
        type: DataTypes.STRING(255),
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    logged: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    sessionEnter: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sessionExit: {
        type: DataTypes.STRING,
        allowNull: true
    },
    asAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},{
    timestamps: false
});

log.sync({force: false}).then(() => {
    console.log('Sucess created Log table!')
}).catch((error) => {
    console.log(error)
});

module.exports = {
    general,
    log
};