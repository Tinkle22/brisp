import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';



const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  ssl: {
    ca: fs.readFileSync(path.resolve(process.cwd(), process.env.DATABASE_SSL_CERT)),
  },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;