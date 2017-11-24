// Set up MySQL connection.
const mysql = require("mysql");
var connection;

// Make connection.
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(proces.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "hacktheplanet",
    database: "todoagain_db"
  });
};

connection.connect();

// Export connection for ORM to use.
module.exports = connection;