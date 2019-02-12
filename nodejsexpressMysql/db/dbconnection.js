const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'labo',
    password: 'labo',
    database: 'nodeexpress',
    insecureAuth: true
});

//connection.connect();

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

module.exports = connection;
