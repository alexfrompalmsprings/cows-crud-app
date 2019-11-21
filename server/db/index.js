const mysql = require('mysql');

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