//! I BELIEVE THIS FILE IS WORKING CORRECTLY
const mysql = require('mysql');

//!might need to change this to db
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'cowsList'
});

//! callback in here
connection.connect((err) => {
  if (!err) {
    console.log("connected");
  } else {
    console.log('this is the err--->',err);
  }
});

module.exports = connection;