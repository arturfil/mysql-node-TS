import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();

let database = {
  host: 'localhost',
  user: 'root',
  password: process.env.PASSWORD,
  database: process.env.DATABASE
}

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
  if (err) throw err;
  connection.release;
  console.log(typeof(process.env.PASSWORD))
  console.log("Database is connected")
})

export default pool;