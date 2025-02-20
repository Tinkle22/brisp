import mysql from 'mysql2/promise';

const sslCert = process.env.DATABASE_SSL_CA;

if (!sslCert) {
throw new Error("DATABASE_SSL_CA environment variable is not defined.");
}

const pool = mysql.createPool({
host: process.env.MYSQL_HOST,
database: process.env.MYSQL_DATABASE,
user: process.env.MYSQL_USER,
password: process.env.MYSQL_PASSWORD,
ssl: {
  ca: sslCert, // Directly use the string
},
waitForConnections: true,
connectionLimit: 10,
queueLimit: 0
});

export default pool;