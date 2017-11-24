// Set up MySQL connection.
const mysql = require("mysql");
var connection;

// Make connection.
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(proces.env.JAWSDB_URL);
  console.log("connected to Jaws");
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  });
  console.log("connected to MySQL");
};

connection.connect();

// Export connection for ORM to use.
module.exports = connection;