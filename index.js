import cors from "cors";
import morgan from "morgan";
import express from "express";
import fileUpload from "express-fileupload";
import hosting from "./setting";
import sqlz from "./setting/connection/index";
import "./setting/db/CREATE/index";
import insertGeneral from "./setting/db/INSERT/index";
import updateGeneral from "./setting/db/UPDATE/index";
import deleteGeneral from "./setting/db/DELETE/index";
import selectGeneral from "./setting/db/SELECT/index";

const service = express();

service.use(express.urlencoded({extended: false}))
service.use(express.json());

service.use(
    cors(),
    fileUpload({ createParentPath: true }),
    morgan('dev'),
    (req, res, next) => {
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', false);

        // Pass to next layer of middleware
        next();
    }
);

sqlz.authenticate()
.then(
    () => {
        console.log('\nConnection has been established successfully.');
    }
).catch (
    (error) => {
        console.error('\nUnable to connect to the database:', error);
    }
);

sqlz.sync();

//GET ALL
service.get('/GET', selectGeneral.selectAllDb);
//GET ID
service.get('/GET/id/:id', selectGeneral.selectIdDb);
//GET USERID
service.get('/GET/userid/:userId', selectGeneral.selectUserIdDb);
//GET USERNAME
service.get('/GET/username/:username', selectGeneral.selectUserNameDb);
//GET USERLOGIN
service.get('/GET/userloged/:userLoged', selectGeneral.selectUserLogedDb);

//POSTNEWUSER
service.post('/POST/newuser', insertGeneral.insertUser);
//POSTLOGIN
service.post('/POST/login', insertGeneral.insertLogin);
//POSTLOGOUT
service.post('/POST/exit/:exit', insertGeneral.insertExit);

//UPDATE
service.patch('/UPDATE/passUserId/:userId', updateGeneral.updatePasswordUserIdDb);
//UPDATE
service.patch('/UPDATE/nameUserId/:userId', updateGeneral.updateNameDb);

//DELETE
service.delete('/DELETE/id/:id', deleteGeneral.deleteIdDb);
//DELETE
service.delete('/DELETE/userId/:userId', deleteGeneral.deleteUserIdDb);
//DELETE
service.delete('/DELETE/name/:name', deleteGeneral.deleteNameDb);

service.listen(
    hosting.PORT,
    () => {
        console.log({
            Status: 'Serviço iniciado com sucesso!',
            Host: `http://${hosting.HOST}:${hosting.PORT}`
        })
    }
)