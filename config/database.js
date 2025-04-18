const mysql = require('mysql2');

const pool = mysql.createPool({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todo_mvc'

});

module.exports = pool.promise();
