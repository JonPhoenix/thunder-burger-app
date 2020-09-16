// Setup MySQL dependency 
const mysql = require('mysql');

let connection;

// Hooking connection with JawsDB MySQL add-on from Heroku
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'tburgers_db'
  });
};

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

// Module.export connection to orm.js
module.exports = connection;
