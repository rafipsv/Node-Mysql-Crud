const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "",
  database: "node-student-test",
});

module.exports = connection;
