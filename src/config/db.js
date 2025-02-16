const dotenv = require('dotenv');
dotenv.config();
const mysql = require('mysql2/promise');

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
};

async function checkDbConnection() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Database connected successfully');
    await connection.end();
  } catch (error) {
    console.error('Database connection failed:', error);
  }
}

checkDbConnection();

module.exports = dbConfig;