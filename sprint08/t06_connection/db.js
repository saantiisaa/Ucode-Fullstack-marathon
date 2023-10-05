const mysql = require('mysql2/promise');
const config = require('./config'); 

const pool = mysql.createPool(config);

async function executeQuery() {
  try {
    const connection = await pool.getConnection();
    const [rows, fields] = await connection.query('SELECT * FROM heroes');
    console.log(rows); 
    connection.release(); 
  } catch (error) {
    console.error('Error executing query:', error);
  }
}

executeQuery();
