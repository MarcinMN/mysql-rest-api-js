//const mysql = require("mysql2/promise");
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  user: "root",
  password: "",
  host: "localhost",
  port: 3306,
  database: "todotutorial",
});

//module.exports = pool;
export default pool;
