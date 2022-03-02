import {v4 as uuidv4} from 'uuid';
import pool from '../../connection/index';

module.exports = {
    async insertUser(req, res) {
        let date = new Date();
        let data = date.toLocaleString('pt-BR');
        let id = uuidv4(date);

        let userData = {
            'ID': id,
            'fullname': req.body.fullname,
            'username': req.body.username,
            'mail': req.body.mail,
            'password': req.body.password,
            'admin': req.body.admin,
        };

        try {
            let responseUserData = await pool.query(
                `INSERT INTO Generals(id, userId, fullname, username, mail, password, asAdmin) VALUES(
                    0,
                    '${userData.ID}',
                    '${userData.fullname}',
                    '${userData.username}',
                    '${userData.mail}',
                    '${userData.password}',
                    '${userData.admin}'
                )`
            );

            res.json(responseUserData);
        } catch (error) {
            console.log(`\n\n${error}`);
        }
    },
    async insertLogin(req, res) {
        let date = new Date();
        let data = date.toLocaleString('pt-BR');
        let id = uuidv4(date);

        let logData = {
            'ID': req.body.userId,
            'username': req.body.username,
            'logged': req.body.logged,
            'sessionEnter': data,
            'sessionExit': req.body.sessionExit,
            'admin': req.body.admin
        }

        try {
            let responseLogData = await pool.query(
                
                `INSERT INTO Logs(id, userId, username, logged, sessionEnter, sessionExit, asAdmin) VALUES(
                    0,
                    '${logData.ID}',
                    '${logData.username}',
                    '${logData.logged}',
                    '${logData.sessionEnter}',
                    '${logData.sessionExit}',
                    '${logData.admin}'
                )`,
            );

            res.json(responseLogData[1]);
        } catch (error) {
            console.log(`\n\n${error}`);
        }
    },
    async insertExit(req, res) {
        let date = new Date();
        let data = date.toLocaleString('pt-BR');
        let id = uuidv4(date);
        
        let logData = {
            'ID': req.body.userId,
            'username': req.body.username,
            'logged': req.body.logged,
            'sessionExit': data,
            'admin': req.body.admin
        }

        try {
            let responseLogData = await pool.query(
                
                `INSERT INTO Logs(id, userId, username, logged, sessionEnter, sessionExit, asAdmin) VALUES(
                    0,
                    '${logData.ID}',
                    '${logData.username}',
                    '${logData.logged}',
                    '',
                    '${logData.sessionExit}',
                    '${logData.admin}'
                )`,
            );

            res.json(responseLogData[1]);
        } catch (error) {
            console.log(`\n\n${error}`);
        }
    }
}