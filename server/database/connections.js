const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'condom'
});
module.exports = dbConnection;