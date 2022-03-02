/* import mysql from 'mysql2';

const pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "filipe",
    password: "Qamba@123",
    database: "apiNodeJs",
}); */

module.exports = {
    HOST: "localhost",
    PORT: 3306,
    USER: "filipe",
    PASSWORD: "Qamba@123",
    DATABASE: "apiNodeJs",
    DIALECT: "mysql"
};

/* const con = mysql2.createConnection({
    host: 'localhost', // O host do banco. Ex: localhost
    user: 'filipe', // Um usuário do banco. Ex: user 
    password: 'Qamba@123', // A senha do usuário. Ex: user123
    database: 'apiNodeJs' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});

con.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})

con.end((err) => {
    if(err) {
        console.log('Erro to finish connection...', err)
        return 
    }
    console.log('The connection was finish...')
}) */