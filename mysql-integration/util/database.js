const mysql = require('mysql2');

// should close connection when done with the query
// create a connection pool
// pool manages multiple connection. each query needs its own connection
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', 
  database: 'nodejs-complete',
  password: process.env.DB_PWD
});

// we call promises so that we can use promise chains
module.exports = pool.promise();