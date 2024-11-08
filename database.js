const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'Viveks-MacBook-Air.local', // Replace with your host if different
  user: 'root',
  password: 'codester06',
  database: 'Questions'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to database!');
});

module.exports = connection;